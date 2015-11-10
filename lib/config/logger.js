module.exports = {
	transports: process.env.LOG_TRANSPORTS.split(','),
	levels: process.env.LOG_LEVELS.split(',')
};
