'use strict';

var _ = require('lodash');

var defaults = {
    port: 1234,
    firebase_secret: "",
    sendgrid_key: ""
};

var config = {};
try {
    config = require('./config.json');
} catch(e) {
    console.log('config.json missing or bad. Loading default config.');
}

module.exports = _.defaults(config, defaults);
