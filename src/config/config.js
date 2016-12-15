let config = {};

if (isProduction) {
  config = require('./config.prod.json');
  console.log('Running with production config');
} else {
  config = require('./config.dev.json');
  console.log('Running with development config');
}

module.exports = config;