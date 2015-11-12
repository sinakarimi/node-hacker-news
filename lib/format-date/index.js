var moment = require('moment');
moment.locale('en', {
	calendar: {
		lastDay: '[Yesterday]',
		sameDay: 'LT',
		lastWeek: 'MMM D'
	}
});

module.exports = function(date) {
	return moment(date).calendar(new Date());
};
