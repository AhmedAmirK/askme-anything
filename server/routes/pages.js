var loopback = require('loopback');
var router = module.exports = loopback();
require('dotenv').config();
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;
var path = require('path');
var striptags = require('striptags');
var discovery = require('../services/discovery.js');
var db = require('../services/mongodb.js');
var db_askibm = require("../models/askibm.js");
var db_users = require("../models/users.js");
const jwt = require('jsonwebtoken'); // Compact, URL-safe means of representing claims to be transferred between two parties.

// Setup the view engine (ejs)
router.set('views',path.join(__dirname, '../', 'views'));
router.set('view engine', 'ejs');
router.engine('html',require('ejs').renderFile);

//_________________________Login/Logout_____________________________
//login button clicked
router.get('/auth/account', ensureLoggedIn('/'), function(req, res, next) {
  if(req.user.profiles[0].profile._json.id){
    //there is an id returned from facebook/linkedin (verified email)
    db_users.find({userID: req.user.profiles[0].profile._json.id,
    account_type:req.user.profiles[0].profile.provider},function(err,data){
        if(err) {
            res.render('index.html', {success: false, message:err});
        } else {
            if(data.length!==0){
              //user exists in the database
              const token = jwt.sign({ userId: req.user.profiles[0].profile._json.id }, "koshek", { expiresIn: '24h' });
              res.render('index.html', { success: true, message: 'Success!', token: token, user: { username: "ahmedhassan" } });
            }
            else{
              //create new user
              var newUser = new db_users({
                account_type:req.user.profiles[0].profile.provider,
                userID:req.user.profiles[0].profile._json.id,
                username:req.user.profiles[0].profile._json.name,
                email:req.user.profiles[0].profile._json.email,
                gender:req.user.profiles[0].profile._json.gender,
                country:"Egypt",
                company:"IBM"
                //phone:String,
                //data:[{question:String, answer:String}]
              });
              newUser.save(function(err) {
                if (err){
                  res.render('index.html', {success: false, message:err});
                }
                else{
                  const token = jwt.sign({ userId: req.user.profiles[0].profile._json.id }, "koshek", { expiresIn: '24h' });
                  res.render('index.html', { success: true, message: 'Success!', token: token, user: { username: "ahmedhassan" } });
                };
              });
            }
        }
    });
  }
  else{
    //email is not verified from facebook/linkedin
    res.render('index.html', {success: false, message:"Email is not verified"});
  }
});

//logout button clicked
router.get('/auth/logout', function(req, res, next) {
  req.logout();
  res.redirect('/');
});

//_________________________Ask a Question_____________________________
//search for a query
router.post('/', function(req, res, next){
  //check if there is a question
  if(req.body.constructor === Object && Object.keys(req.body).length !== 0){
    discovery.query({
        environment_id: process.env.DISCOVERY_ENVIRONMENT_ID,
        collection_id: process.env.DISCOVERY_COLLECTION_ID,
        natural_language_query: req.body.question
      }, function(err, data) {
            if (err) {
              res.send(err);
            } else {
              var Answers = [];
              for(var i=0; i < data.results.length; i++){
                if(data.results[i].score > 0.7){
                  Answers.push(striptags(data.results[i].AcceptedAnswer));
                }
              }
              res.contentType = 'json';
              res.send({
                answers: Answers
              });
            }
       });
  }
  else{
    res.send();
  }
});

//_________________________ask IBM_____________________________
//send question to ibm / save it to the database
router.post('/askibm', ensureLoggedIn('/'), function(req, res, next){
  //check if there is a question
  if(req.body.constructor === Object && Object.keys(req.body).length !== 0){
    var new_Q = new db_askibm({
      question:"how to use watson?",
      userID:"123456",
      name:"Ahmed Hassan",
      email:"ahmed.koshek@hotmail.com",
      country:"EGYPT",
      company:"IBM",
      account_type:"Facebook"
    });
    new_Q.save(function (err){
      if(err){
        console.log(err);
        res.send(err);
      }
      else{
        console.log("Question saved");
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
            res.send(err);
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
      update = {$push:{data:{question:req.body.question, answer:req.body.ans}}},
      options = { upsert: true, new: true, setDefaultsOnInsert: true };
    db_users.findOneAndUpdate(query, update, options, function(err, result) {
      if (err){
        res.send(err);
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
      res.send(err);
    }
    else{
      res.send(result);
    }
  });

});

//___________________________Rank_______________________________
router.post('/rank', ensureLoggedIn('/'), function(req, res, next){
  //check if there is a question and a rank
  if(req.body.constructor === Object && Object.keys(req.body).length !== 0){
    if(req.body.question !== "" && req.body.answer !== ""){

    }
  }
});
module.export = router;
