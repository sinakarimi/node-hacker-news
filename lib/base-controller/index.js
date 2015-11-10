var logger = require('lib/logger');

module.exports = {
	render: function(req, res, view, options, fn) {
		var extension = (req.params && req.params.extension) || '';
		var path = view;

		// Flush the flash messages to the response.
		options.flash = req.flash();

		logger.info('options.flash', { flash: options.flash });

		if (extension === 'json') {
			delete options.layout;
			res.contentType('json');
			res.send(JSON.stringify(options));
		}
		else {
			res.render(path, options, fn);
		}
	}
}
