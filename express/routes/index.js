//create routes for express router

const router = require('express').Router();
const bodyParser = require('body-parser');


router.get('/', function (req, res) {
    res.send("i got you on my home page");
});

router.post('/', function (req, res) {
});

router.get('/login', function (req, res) {
    //render views/login.html
    res.sendFile(__dirname + '/views/login.html');
});

router.post('/login', function (req, res) {
    //show the data in the login form
    console.log(req.body)
    res.send("you posted to the login page");
});

module.exports = router;