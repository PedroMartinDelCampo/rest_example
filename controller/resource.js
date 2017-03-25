var Resource = require('../model/resource.js');
function create(req, res) {
	var resource = new Resource();
	resource.str = req.body.str;
	resource.int = req.body.int;

	resource.save(function(err) {
		if (err) {
			res.send(err);
		} else {
			res.json({ message: 'Created' });
		}
	});
}

function index(req, res) {
	Resource.find(function(err, resources) {
		if (err) {
			res.send(err);
		} else {
			res.json(resources);
		}
	});
}

function get(req, res) {
	Resource.findById(req.params.resource_id, function(err, resource) {
		if (err) {
			res.send(err);
		} else {
			res.json(resource);
		}
	});
}

function update(req, res) {
	Resource.findById(req.params.resource_id, function(err, resource) {
		resource.str = req.body.str;
		resource.int = req.body.int;
		resource.save(function(err) {
			if (err) {
				res.send(err);
			} else {
				res.json({ message: 'Updated' });
			}
		});
	});
}

function remove(req, res) {
	Resource.remove({
		_id: req.params.resource_id
	}, function(err, resource) {
		if (err) {
			res.send(err);
		} else {
			res.json({ message: 'Delete' });
		}
	});
}

module.exports = function(router) {
	router.route('/resources')
			.post(create)
			.get(index);

	router.route('/resources/:resource_id')
			.get(get)
			.put(update)
			.delete(remove);
};