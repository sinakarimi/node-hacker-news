require('app-module-path').addPath(__dirname);

var commander = require('commander');
var config = require('lib/config');
var logger = require('lib/logger');
var app = require('./app');

// Set the command line arguments available
// -p, --port - Set the port that the server should listen on
commander
	.option('-p, --port <port>', 'Port to listen on', parseInt)
	.parse(process.argv);

var port = commander.port || config.core.port;
app.listen(port);
logger.info('Node Hacker News server listening on port ' + port);
// Uncaught exception handler.
process.addListener('uncaughtException', function(err) {
	logger.uncaught('Uncaught error in server.js', { err:err, stack: err.stack });
	process.exit(1);
});
