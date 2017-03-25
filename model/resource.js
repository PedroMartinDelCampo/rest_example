var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ResourceSchema = new Schema({
	str: String,
	int: Number
});

module.exports = mongoose.model('Resource', ResourceSchema);