let config = require('./config.prod.json');

try {
  config = require('./config.dev.json');
  console.log('using development configuration')
} catch (e) {
  console.log('using production configuration');
}

module.exports = config;