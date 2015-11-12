var _ = require('lodash');
var should = require('should');
var request = require('supertest')(test.app);

var Article = require('src/article/model');

describe('Article:e2e:delete', function() {
	var url = _.template('/<%= articleId %>/delete');
	var testUrl = url({
		articleId: test.fixtures.article.default._id
	});
	console.log('Test url', testUrl);

	it('should delete an article', function(done) {
		request
			.get(testUrl)
			.expect(302, function(err, res) {
				should.not.exist(err);

				Article.findById(test.fixtures.article.default._id)
				.exec(function(err, article) {
					should.not.exist(err);
					should.exist(article);

					article.deleted.should.equal(true);

					done();
				});
			});
	});
});
