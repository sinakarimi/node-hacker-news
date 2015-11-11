var _ = require('lodash');
var async = require('async');

var Article = require('src/article/model');
var should = require('should');

describe('Article:unit:create', function() {
	it('should create an article if it does not exist', function(done) {
		var article = {};
		article.title = 'Test title';
		article.objectID = '123456';

		Article.create(article, function(err, obj) {
			should.not.exist(err);
			should.exist(obj);

			obj.title.should.equal(article.title);
			obj.objectID.should.equal(article.objectID);

			done();
		});
	});

	it('should create an article based off actual data', function(done) {
		var article = test.fixtures.article.default;

		// Delete the article _id and ObjectId so we don't encounter duplicate errors
		delete article._id;
		article.objectID = '1010101';

		Article.create(article, function(err, obj) {
			should.not.exist(err);
			should.exist(obj);

			// Check that required properties match
			obj.toObject().should.have.properties({
				objectID: article.objectID,
				author: article.author,
				title: article.title,
				story_title: article.story_title
			});

			// Ensure the dates are the same
			new Date(article.created_at).toString().should.equal(new Date(obj.created_at).toString());

			done();
		});
	});

	it('should error when attempting to create a duplicate article with the same objectID', function(done) {
		var article = test.fixtures.article.default;

		// Delete the article _id as we're only testing for a duplicate objectID at this stage
		delete article._id;

		Article.create(article, function(err, obj) {
			should.exist(err);
			should.not.exist(obj);

			done();
		});
	});
});
