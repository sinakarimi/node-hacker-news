var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var schema = new Schema({
	created_at: Date,
	title: String,
	url: String,
	author: String,
	points: Number,
	story_text: String,
	story_title: String,
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

mongoose.model('article', schema);

module.exports = mongoose.model('article');
