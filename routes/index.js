var express = require('express');
var app = express()


app.get('/', function (req, res, next) {
	console.log("TEST")
});

app.listen(8080)