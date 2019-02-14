var express = require('express');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

var router = express.Router();


const userController = require('../controllers/userController');


/* GET users listing. */
router.get('/signup', (req, res, next) =>{
  res.render('signup');
});


//Post
router.post('/test', urlencodedParser, userController.newAccount);
router.post('/login', urlencodedParser, userController.login);


module.exports = router;
