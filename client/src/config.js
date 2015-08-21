'use strict';

var _ = require('lodash');

var defaults = {
    "FIREBASE_APP": "hapoelbus-testapp" //TODO: should remove this
};

var config = {};
try {
    config = require('json!./config.json');
} catch(e) {
    console.log('config.json missing or bad. Loading default config.');
}

module.exports = _.defaults(config, defaults);
