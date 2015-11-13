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
		required: true,
		index: {
			unique: true
		}
	},
	deleted: {
		type: Boolean,
		default: false
	}
});

schema.static({
	createOrUpdate: function(data, callback) {
		async.waterfall([
			function findArticle(cb) {
				Article.findOne({ objectID: data.objectID }).exec(cb);
			},
			function checkArticle(article, cb) {
				if (article) {
					_updateArticle(article, cb);
				} else {
					_saveArticle(data, cb);
				}
			}
		], callback);

		function _saveArticle(data, cb) {
			var data = new Article(data);
			data.save(function(err) {
				if (err) {
					return cb(err);
				}

				cb();
			});
		}

		function _updateArticle(article, cb) {
			Article.findByIdAndUpdate(article._id, data, {}).exec(function(err, arg) {
				if (err) {
					return cb(err);
				}

				Article.findById(article._id, cb);
			});
		}
	}
})

mongoose.model('article', schema);
module.exports = Article = mongoose.model('article');
