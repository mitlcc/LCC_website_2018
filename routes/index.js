var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET exec page. */
router.get('/execboard', function(req, res, next){
  res.render('exec', {title: 'Exec'})
});

/* GET clubs page. */
router.get('/clubs', function(req, res, next){
  res.render('clubs', {title: 'Clubs'})
});

/* GET contact. */
router.get('/contact', function(req, res, next){
  res.render('contact', {title: 'Contact'})
});

module.exports = router;
