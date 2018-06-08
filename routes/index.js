var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('index')
});

router.route("/secret")
    .post(function (req, res) {
        //initial data
        username = req.body.name;
        password = req.body.password;
        secret = req.body.secret;
        console.log(username)
        console.log(password)
        console.log(secret)

        
    })

module.exports = router;