var should = require('should');
var request = require('supertest')(test.app);

describe('Article:e2e:list', function() {
	var url = '/';

	it('should get a list of articles sorted from newest to oldest', function(done) {
		request
			.get(url)
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/)
			.expect(200, function(err, res) {
				should.not.exist(err);
				should.exist(res.body);

				res.body.should.be.a.Array;
				res.body.should.be.instanceof(Array).and.have.lengthOf(Object.keys(test.fixtures.article).length)
				should.exist(res.body[0]._id);

				// Ensure it's sorted as newest article first
				res.body[0].objectID.should.equal(test.fixtures.article.newDate.objectID);

				done();
			});
	});
});
