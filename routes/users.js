var express = require('express');
var router = express.Router();

// require the account model
var mUser = require('../models/account');

// auth check
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  }
  else {
    res.redirect('/login');
  }
}

/* GET users listing. */
router.get('/', function(req, res, next) {

  mUser.find (function(err, users) {
    if (err) {
      res.render('error', {
        error: 'user model broken',
        message: error
      });
    }
    else {
      //res.send('respond with a resource');
      res.render('users', {
        title: 'users',
        user: req.user,
        account: users
      });
    }
  });



});

module.exports = router;
