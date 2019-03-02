const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello branch\n');
});

server.listen(process.env.port || 8080, null, () => {
  console.log(process.env.port || 8080);
});
