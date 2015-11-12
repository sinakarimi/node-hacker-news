var logger = require('lib/logger');

module.exports = {
	render: function(req, res, view, data) {
		var path = view;

		res.format({
			// Html (default).
			'text/html': function() {
				res.render(path, { data: data });
			},
			// JSON.
			'application/json': function() {
				res.send(data);
			}
		});
	}
}
