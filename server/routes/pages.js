var loopback = require('loopback');
var router = module.exports = loopback();

var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;
// Setup the view engine (ejs)
var path = require('path');
router.set('views',path.join(__dirname, '../', 'views'));
router.set('view engine', 'ejs');
router.engine('html',require('ejs').renderFile);


router.get('/', function(req, res, next){
  res.render('index.html');
});

router.get('/auth/account', ensureLoggedIn('/'), function(req, res, next) {
  res.render('login', {
    user: req.user.profiles[0].profile._json,
    url: req.url,
  });
  //create user in database
  if(req.user.profiles[0].profile.provider === "facebook")
  {
    console.log("Facebook");
    console.log(req.user.profiles[0].profile._json);
  }
  else if(req.user.profiles[0].profile.provider === "linkedin")
  {
    console.log("Linkedin");
    console.log(req.user.profiles[0].profile._json);
  }
});

router.get('/auth/logout', function(req, res, next) {
  req.logout();
  res.redirect('/');
});


module.export = router;
