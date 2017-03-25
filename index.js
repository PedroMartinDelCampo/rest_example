// index.js

// Dependencies
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// Parse request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Setup
var config = require('./config.js');

var database = require('./database.js');
database(config.db.host, config.db.port, config.db.database, function() {
	var router = express.Router();
	var middleware = require('./middleware.js');
	// app.use(middleware);
	var routes = require('./router.js');
	routes(router);
	app.use(config.server.baseURL, router);
	// Serve
	app.listen(config.server.port);
	console.log('Listening on port: ' + config.server.port);
});