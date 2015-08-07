'use strict';

var express = require('express');
var path = require('path');
var config = require('./config.js');

var port = config.port;
var app = express();

app.use('/', express.static(path.join(__dirname, 'client/dist')));
//app.use('/services/mail', require('./server/routers/mailRouter'));

var server = app.listen(port, function() {
  console.log('Express server listening on http://%s:%s', 'localhost', server.address().port);
});