/**
 * Root: This file runs before any other tests, useful for clearing db etc.
 */

 // app-module-path negates the need to have to write
 // crazy local modules paths, e.g. ../../../config
require('app-module-path').addPath(__dirname + '/../')
var async = require('async');
var fixtures = require('mongoose-fixtures');
var mongoose = require('mongoose');
require('lib/mongoose-connection');

function dropMongoDatabase(callback) {
	// Drop the database once connected (or immediately if connected).
	var CONNECTION_STATES = mongoose.Connection.STATES;
	var readyState = mongoose.connection.readyState;
	var connected = false;

	var drop = function() {
		mongoose.connection.db.dropDatabase(function(err) {
			if (err) {
				throw err;
			}
			callback(err);
		});
	};

	if (CONNECTION_STATES[readyState] === 'connected') {
		drop();
	}
	else {
		mongoose.connection.once('connected', drop);
	}
}

// This bit of code runs before ANY tests start.
before(function beforeAllTests(done) {
		dropMongoDatabase(done);
});

// Before each test, load the fixture data to ensure consistent tests.
var data = require('./fixtures');
beforeEach(function beforeEachTest(done) {
	fixtures.load(data, done);
});

// This bit of code runs after ALL tests have finished.
after(function afterAllTests(done) {
	// @NOTE: We don't drop databases after,
	// because it allows us to inspect the data if we wish to.
	done();
});
