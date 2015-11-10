var commander = require('commander');
var app = require('./app');

// Set the command line arguments available
// -p, --port - Set the port that the server should listen on
commander
	.option('-p, --port <port>', 'Port to listen on', parseInt)
	.parse(process.argv);

var port = commander.port || 8080;
app.listen(port);

// Uncaught exception handler.
process.addListener('uncaughtException', function(err) {
	logger.uncaught('Uncaught error in server.js', { err:err, stack: err.stack });
	process.exit(1);
});
