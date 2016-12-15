let config = {};

if (process.env.NODE_ENV === 'production') {
  config = require('./config.prod.json');
  console.log('using production configuration');
} else {
  config = require('./config.dev.json');
  console.log('using development configuration');
}

module.exports = config;