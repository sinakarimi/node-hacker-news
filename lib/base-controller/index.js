var logger = require('lib/logger');

module.exports = {
	render: function(req, res, view, options, fn) {
		var extension = (req.params && req.params.extension) || '';
		var path = view;

		// Flush the flash messages to the response.
		options.flash = req.flash();

		logger.info('options.flash', { flash: options.flash });

		res.format({
			// Html (default).
			'text/html': function() {
				res.render(path, options, fn);
			},
			// JSON.
			'application/json': function() {
				res.send(options);
			}
		});
	}
}
