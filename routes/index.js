var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Secret = mongoose.model('Secret');
var crypto = require('crypto');
var algorithm = 'aes-256-cbc';
var encryptPassword = "jeroenL";

router.get('/', function (req, res, next) {
    res.render('index')
});

router.route("/secret")
    .get(function (req, res) {
        //initial data
        username = req.query.name;
        password = req.query.password;
        console.log(username)
        console.log(password)


        //encrypt username for storage
        encUsername = encrypt(username, encryptPassword);
        console.log(encUsername)

        //encrypt password for storage
        console.log("encrypting password: " + password +  " with " + encUsername )
        encPassword = encrypt(password, encUsername);
		console.log(encPassword)

        //find messeage by encrupt username en password;
        Secret.findOne({ secretUser: encUsername, secretPassword: encPassword }).exec(function (err, secret) {
            if (err) {
                res.status(500);
                return res.send({
                    "status": 500,
                    "error": err
                });
            }
            if (secret != null) {
                secretText = decrypt(secret.secretText, encPassword);
                console.log(secretText)
                res.send(secretText)
            } else {
                res.send();
            }
        });

    })
    .post(function (req, res) {
        //initial data
        username = req.body.name;
        password = req.body.password;
        secret = req.body.secret;
        console.log(username)
        console.log(password)
        console.log(secret)

        // encrypt username for storage
		encUsername = encrypt(username, encryptPassword);
		console.log(encUsername)

        //encrypt password for storage
        console.log("encrypting password: " + password +  " with " + encUsername )
		encPassword = encrypt(password, encUsername);
		console.log(encPassword)

		//encrypt secret for sortage
		encSecret = encrypt(secret, encPassword);
		console.log(encSecret)

        newSecret = new Secret();
        newSecret.secretUser = encUsername;
        newSecret.secretPassword = encPassword;
        newSecret.secretText = encSecret;

        Secret.findOne({ secretUser: encUsername, secretPassword: encPassword }).exec(function (err, secret) {
            if (err) {
                res.status(500);
                return res.send({
                    "status": 500,
                    "error": err
                });
            }
            if (secret != null) {
                secret.secretText = encSecret;
                secret.save(function (err, secret) {
                    if (err) {
                        res.status(500);
                        return res.send({
                            "status": 500,
                            "error": err
                        });
                    }
                    res.status(200)
                    res.send("Secret is stored");
                })
            } else {
                newSecret.save(function (err, secret) {
                    if (err) {
                        res.status(500);
                        return res.send({
                            "status": 500,
                            "error": err
                        });
                    }
                    res.status(200)
                    res.send("Secret is stored");
                })
            }
        })

    })

function encrypt(text, password) {
    var cipher = crypto.createCipher(algorithm, password)
    var crypted = cipher.update(text, 'utf8', 'base64')
    crypted += cipher.final('base64');
    return crypted;
}

function decrypt(text, password) {
	var decipher = crypto.createDecipher(algorithm, password)
	var dec = decipher.update(text, 'base64', 'utf8')
	dec += decipher.final('utf8');
	return dec;
}

module.exports = router;