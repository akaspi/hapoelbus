'use strict';

var _ = require('lodash');

var defaults = {};

var config = {};
try {
    config = require('./config.json');
} catch(e) {
    console.log('config.json missing or bad.');
    process.exit();
}

module.exports = _.defaults(config, defaults);
