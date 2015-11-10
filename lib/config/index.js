// Load environment variables from .env file
require('dotenv').load();

// Using require-directory we can require the entire current directory
module.exports = require('require-directory')(module);
