module.exports = function(req, res, next) {
	console.log(req);
	next();
	console.log(res);
};