var mongoose = require('mongoose');
var config = require('lib/config');
var logger = require('lib/logger');
var mongooseOptions = {};

mongoose.connection.on('error', function(err) {
	logger.error('Mongoose connection error', { err: err });
	throw new error('MongooseConnectionError');
});

mongoose.connection.on('open', function() {
	logger.info('Mongoose connection open');
});

logger.debug('Connecting to Mongo with the following Mongoose Options', {
	options: mongooseOptions
});

// Connect to Mongoose using our database config.
mongoose.connect(config.mongoose.uri, mongooseOptions);

module.exports = mongoose;
