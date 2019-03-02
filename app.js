const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

console.log('I work on port')
console.log(process.env.port || 8080);
server.listen(process.env.port || 8080);
