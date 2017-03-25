var mongoose = require('mongoose');

module.exports = function(host, port, db, callback) {
	var url = 'mongodb://' + host + ':' + port + '/' + db;
	mongoose.connect(url, function(error, database) {
		if (error) {
			console.log(error);
		} else {
			callback();
		}
	});
}