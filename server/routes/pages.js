var loopback = require('loopback');
var router = module.exports = loopback.Router();
require('dotenv').config();
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;
var Promise = require('promise');
var path = require('path');
var striptags = require('striptags');
var discovery = require('../services/discovery.js');
var db = require('../services/mongodb.js');
var db_askibm = require("../models/askibm.js");
var db_users = require("../models/users.js");

//_________________________Login/Logout_____________________________
//login button clicked
router.get('/auth/account', ensureLoggedIn('/'), function(req, res, next) {
  if(req.user.profiles[0].profile._json.id){
    //there is an id returned from facebook/linkedin (verified email)
    db_users.find({userID: req.user.profiles[0].profile._json.id,
    account_type:req.user.profiles[0].profile.provider},function(err,data){
        if(err) {
            res.status(500).send({success: false, message:err});
        } else {
            if(data.length!==0){
              //user exists in the database
              res.redirect('/#/home/'+req.accessToken.id+'/'+req.accessToken.userId);
            }
            else{
              //create new user
              var provider = req.user.profiles[0].profile.provider;
              var userid = req.user.profiles[0].profile._json.id;
              var email,username;
              if(provider === "facebook"){
                username = req.user.profiles[0].profile._json.name;
                email = req.user.profiles[0].profile._json.email;
              }
              else{
                username = req.user.profiles[0].profile._json.formattedName;
                email = req.user.profiles[0].profile._json.emailAddress;
              }
              var newUser = new db_users({
                account_type:provider,
                userID:userid,
                username:username,
                email:email,
              });
              newUser.save(function(err) {
                if (err){
                  res.status(500).send({success: false, message:err});
                }
                else{
                  res.redirect('/#/home/'+req.accessToken.id+'/'+req.accessToken.userId);
                };
              });
            }
        }
    });
  }
  else{
    //email is not verified from facebook/linkedin
    res.status(500).send({success: false, message:"Email is not verified"});
  }
});

//logout button clicked
router.get('/auth/logout', function(req, res, next) {
  req.logout();
  res.redirect('/');
});

//_________________________Ask a Question_____________________________
//search for a query
router.post('/question', function(req, res, next){
  //check if there is a question
  if(req.body.constructor === Object && Object.keys(req.body).length !== 0){
    var discovery_search = new Promise(function(resolve, reject){
      discovery.query({
          environment_id: process.env.DISCOVERY_ENVIRONMENT_ID,
          collection_id: process.env.DISCOVERY_COLLECTION_ID,
          natural_language_query: req.body.question
        }, function(err, data) {
              var Answers = [];
              if (err) {
                reject(err);
              } else {
                for(var i=0; i < data.results.length; i++){
                  if(data.results[i].score > 0.8){
                      Answers.push(striptags(data.results[i].AcceptedAnswer));
                  }
                }
                resolve(Answers);
              }
         });
       });
     var discovery_services = new Promise(function(resolve, reject){
         discovery.query({
             environment_id: process.env.DISCOVERY_ENVIRONMENT_ID,
             collection_id: process.env.DISCOVERY_SERVICES_COLL_ID,
             natural_language_query: req.body.question
           }, function(err, data) {
                var Services = [];
                 var Answers = [];
                 if (err) {
                   reject(err);
                 } else {
                   for(var i=0; i < data.results.length; i++){
                     if(data.results[i].score > 0.49){
                         Services.push(data.results[i]);
                     }
                   }
                   resolve(Services);
                 }
            });
        });

    Promise.all([ discovery_search, discovery_services ])
    .then(function(values){
      res.contentType = 'json';
      res.send({
        answers: values[0],
        services: values[1]
      });
    })
    .catch(function(error){
      res.status(500).send(error);
    });
  }
  else{
    res.status(500).send("No Question!");
  }
});

//_________________________ask IBM_____________________________
//send question to ibm / save it to the database
router.post('/askibm', ensureLoggedIn('/'), function(req, res, next){
  //check if there is a question
  if(req.body.constructor === Object && Object.keys(req.body).length !== 0){
    var provider = req.user.profiles[0].profile.provider;
    var userid = req.user.profiles[0].profile._json.id;
    var email,username;
    if(provider === "facebook"){
      username = req.user.profiles[0].profile._json.name;
      email = req.user.profiles[0].profile._json.email;
    }
    else{
      username = req.user.profiles[0].profile._json.formattedName;
      email = req.user.profiles[0].profile._json.emailAddress;
    }
    var new_Q = new db_askibm({
      question:req.body.question,
      userID:userid,
      name:username,
      email:email,
      account_type:provider
    });
    new_Q.save(function (err){
      if(err){
        res.status(500).send(err);
      }
      else{
        res.send("Question saved");
      }
    });
  }
  else{
    res.send("No question");
  }
});

//_________________________Bookmarks_____________________________
router.get('/bookmarks', ensureLoggedIn('/'), function(req, res, next){
  db_users.find({
    userID:req.user.profiles[0].profile._json.id,
    account_type:req.user.profiles[0].profile.provider} ,function(err,data){
        if(err) {
            res.status(500).send(err);
        } else {
            res.send(data[0].data);
        }
    });
});

router.post('/bookmarks', ensureLoggedIn('/'), function(req, res, next){
  //check id there is a body
  if(req.body.constructor === Object && Object.keys(req.body).length !== 0){
    var query = {userID: req.user.profiles[0].profile._json.id,
      account_type:req.user.profiles[0].profile.provider},
      update = {$push:{data:{question:req.body.question, answer:req.body.ans.ans}}},
      options = { upsert: true, new: true, setDefaultsOnInsert: true };
    db_users.findOneAndUpdate(query, update, options, function(err, result) {
      if (err){
        res.status(500).send(err);
      }
      else{
        res.send(result);
      }
    });
  }
  else{
    res.send();
  }
});

router.delete('/bookmarks/:id', ensureLoggedIn('/'), function(req, res, next){
  var query = {userID: req.user.profiles[0].profile._json.id,
  account_type:req.user.profiles[0].profile.provider},
    update = {$pull:{data:{_id: req.params.id}}};
  db_users.findOneAndUpdate(query, update, function(err, result) {
    if (err){
      res.status(500).send(err);
    }
    else{
      res.send(result);
    }
  });

});

module.export = router;
