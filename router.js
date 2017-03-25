var ResourceController = require('./controller/resource.js');

module.exports = function(router) {
	router.get('/', function(req, res) {
		res.json({ message: 'Hello world'});
	});
	ResourceController(router);
};