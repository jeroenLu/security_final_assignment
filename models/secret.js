var mongoose = require( 'mongoose' );
var Schema  = mongoose.Schema;

var secretSchema = new Schema({
	secretUser: String,
	secretPassword: String,
	secretText: String
})

mongoose.model('Secret', secretSchema);
