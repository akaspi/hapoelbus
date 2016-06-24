const express = require('express');
const path = require('path');
const app = express();
const server = require('http').createServer(app);
const staticPath = path.join(path.resolve(path.dirname()), '');

app.use(express.static(staticPath));

server.listen(process.env.PORT || 8080, () => {
  console.log('Production server listening at port %d', server.address().port); // eslint-disable-line no-console,max-len
});