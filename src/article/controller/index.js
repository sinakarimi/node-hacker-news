var _ = require('lodash');
var Article = require('src/article/model');

var controller = {
	list: function(req, res, next) {
		Article.find()
		.sort('-created_at')
		.exec(function(err, articles) {
			if (err) {
				return next(err);
			}

			controller.render(req, res, 'article/view/list', articles);
		});
	},
	delete: function(req, res, next) {
		// @TODO: Implement this function
		res.send('delete');
	},
};

module.exports = _.extend(controller, require('lib/base-controller'));
