'use strict';
const http = require('http');
const jade = require('jade');
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  });
  switch (req.method) {
    case 'GET':
      res.write(jade.renderFile('./index.jade', {}));
      res.end();
      break;
    default:
      break;
  }
});

const port = process.env.PORT || 8000;
server.listen(port, () => {
  console.info('[' + new Date() + '] Listening on ' + port);
});