var _ = require('lodash');
var Article = require('src/article/model');

var controller = {
	list: function(req, res, next) {
		Article.find({
			deleted: false
		})
		.sort('-created_at')
		.exec(function(err, articles) {
			if (err) {
				return next(err);
			}

			controller.render(req, res, 'article/view/list', articles);
		});
	},
	delete: function(req, res, next) {
		var articleId = req.params.articleId;

		var query = { _id: articleId};
		var update = { deleted: true };
		Article.findOneAndUpdate(query, update, {}, function(err) {
			if (err) {
				return next(err);
			}

			res.redirect('/');
		});
	}
};

module.exports = _.extend(controller, require('lib/base-controller'));
