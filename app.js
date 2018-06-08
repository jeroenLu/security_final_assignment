var express = require('express');
var router = express.Router();
var app = express();
var mongo = require('mongoose');

// setup view engine
var exphbs  = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'layout'}));
var path = require('path');
app.set('views', path.join(__dirname, 'views/'));
app.set('view engine', 'handlebars');
app.use(express.static('public'))

// set bodyparser
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./config/database');

//Get router with routes
var routes = require('./routes/index');

//Set routers as middleware
app.use('/', routes);

module.exports = app;