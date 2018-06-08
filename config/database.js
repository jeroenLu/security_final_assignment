var mongoose = require('mongoose');
var dbconnection =  'mongodb://localhost:27017/final_assignment'; 
mongoose.connect(dbconnection);
mongoose.Promise = require('q').Promise;