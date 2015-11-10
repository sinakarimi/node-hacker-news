var _ = require('lodash');

var controller = {
	list: function(req, res, next) {
		// @TODO: Implement this function
		res.send('list');
	},
	delete: function(req, res, next) {
		// @TODO: Implement this function
		res.send('delete');
	},
};

module.exports = _.extend(controller, require('lib/base-controller'));
