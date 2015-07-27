var express = require('express');
var path = require('path');
var port = 1234;
var app = express();

app.use('/', express.static(path.join(__dirname, 'public')));

var server = app.listen(port, function() {
  console.log('Express server listening on http://%s:%s', 'localhost', server.address().port);
});
