var _ = require('lodash');
var async = require('async');
var should = require('should');

var Article = require('src/article/model');

describe('Article:unit:createOrUpdate', function() {
	it('should create an article if it does not exist', function(done) {
		var article = new Article();
		article.title = 'Some Article';
		article.objectID = '123456';

		Article.createOrUpdate(article, function(err, obj) {
			done();
		});
	});

	it('should update an existing article', function(done) {
		var article = test.fixtures.article.default;
		delete article._id;

		article.title = 'New title';

		Article.createOrUpdate(article, function(err, obj) {
			should.not.exist(err);
			should.exist(obj);

			should.exist(obj.title);
			obj.title.should.be.exactly('New title');

			done();
		});
	});
});
