var _ = require('lodash');
var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;

var article = {
	default: {
		_id: new ObjectId(),
		created_at: "2015-11-10T21:44:41.000Z",
    author: "catnaroek",
    comment_text: "This is some comment text",
    story_id: 10527428,
    story_title: "The category design pattern",
    story_url: "http://www.haskellforall.com/2012/08/the-category-design-pattern.html",
    parent_id: 10541683,
    created_at_i: 1447191881,
    _tags: [
      "comment",
      "author_catnaroek",
      "story_10527428"
    ],
    objectID: "10542777",
	},
	newDate: {
		_id: new ObjectId(),
		created_at: new Date(),
		objectID: '12345678'
	}
}

module.exports = {
	article: article
}
