module.exports = {
	database: process.env.MONGODB_DATABASE,
	uri: process.env.MONGODB_URI + '/' + process.env.MONGODB_DATABASE
};
