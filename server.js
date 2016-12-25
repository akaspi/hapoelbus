const express = require('express');
const path = require('path');
const app = express();
const server = require('http').createServer(app);
const staticPath = path.join(__dirname, 'dist/'); // eslint-disable-line no-undef
const port = process.env.PORT || 8080; // eslint-disable-line no-undef

app.use(express.static(staticPath));

app.get('/*', (req, res) => {
  res.sendFile(path.join(staticPath, 'index.html'));
});

server.listen(port, () => {
  console.log(`Production server listening at port ${port}`); // eslint-disable-line no-console
});