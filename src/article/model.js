var async = require('async');
var mongoose = require('mongoose');
var logger = require('lib/logger');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var Article;
var schema = new Schema({
	created_at: Date,
	title: String,
	story_title: String,
	url: String,
	author: String,
	points: Number,
	story_text: String,
	story_url: String,
	parent_id: String,
	tags: [String],
	// objectID is not to be confused with the Mongo document _id
	// this refers to the hacker news object id of the article itself
	objectID: {
		type: String,
		index: {
			unique: true
		}
	}
});

// schema.pre('save', function(next) {
// 	var article = this;
// 	return next();
// });

schema.static({
	createOrUpdate: function(data, callback) {
		async.waterfall([
			function findArticle(cb) {
				Article.findOne({ objectID: data.objectID }).exec(cb);
			},
			function saveArticle(article, cb) {
				if (article) {
					return cb(null, article);
				}

				var newArticle = new Article(article);
				newArticle.save(function(err) {
					if (err) {
						return callback(err);
					}

					cb(true);
				});
			},
			function updateArticle(article, cb) {
				Article.findByIdAndUpdate(article._id, data, {}).exec(function(err, arg) {
					Article.findById(article._id, cb);
				});
			}
		], callback)
	}
})

mongoose.model('article', schema);
module.exports = Article = mongoose.model('article');
