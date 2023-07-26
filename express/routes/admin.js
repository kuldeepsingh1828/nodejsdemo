const router = require('express').Router();

router.get('/', function (req, res) {
    res.send("welcome to admin page")
})

router.get('/login', function (req, res) {
    res.send("welcome to admin login page")
})

module.exports = router;