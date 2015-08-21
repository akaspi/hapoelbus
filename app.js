'use strict';

var express = require('express');
var path = require('path');
var config = require('./client/src/config.js');

var port = config.port;
var app = express();

app.use('/', express.static(path.join(__dirname, 'client/dist')));

var server = app.listen(port, function() {
  console.log('Express server listening on http://%s:%s', 'localhost', server.address().port);
});

if (process.argv[2] === 'mail') {
  var mailService = require('./server/services/mailService.js');
  mailService.listen();
}