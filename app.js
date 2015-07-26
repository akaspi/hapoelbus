var express = require('express');
var path = require('path');
var port = 1234;
var app = express();

app.use('/', express.static(path.join(__dirname, 'public')));

app.listen(port, function() {
    console.log('Express server listening on port ' + port);
});
