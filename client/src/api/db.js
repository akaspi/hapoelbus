'use strict';

var Firebase = require('firebase');
var config = require('../config.js');

module.exports = new Firebase('https://' + config.FIREBASE_APP + '.firebaseio.com/');
