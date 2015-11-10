var path = require('path');
var winston = require('winston');
var config = require('lib/config');
var env = process.env.NODE_ENV;
var logFilePath = path.join(__dirname, '../../' + env + '.log');

winston.emitErrs = true;

var AVAILABLE_TRANSPORTS = {
	'console': new winston.transports.Console({
		level: config.logger.levels,
		handleExceptions: false,
		json: false,
		colorize: true
	}),
	'file': new winston.transports.File({
		filename: logFilePath,
		level: config.logger.levels,
		handleExceptions: false,
		json: false,
		colorize: false
	})
};

var transports = [];
var undefinedTransports = [];

config.logger.transports.forEach(function(transport) {
	if (AVAILABLE_TRANSPORTS[transport]) {
		transports.push(AVAILABLE_TRANSPORTS[transport]);
	} else {
		undefinedTransports.push(transport);
	}
});

var logger = new winston.Logger({
	transports: transports,
	exitOnError: false
});

if (undefinedTransports.length > 0) {
	logger.warn('The following transports were undefined', {
		transports: undefinedTransports
	});
}

module.exports = logger;
