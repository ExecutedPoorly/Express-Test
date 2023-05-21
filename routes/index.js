var express = require('express');
var router = express.Router();
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET form. */
router.get('/new', function(req, res, next){ //get req
  res.render('form')
});

router.post('/new', function(req, res, next){//post req
  messages.push({text: req.body.message, user: req.body.name, added: new Date()});
  res.redirect('/');
}); 
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

module.exports = router;

