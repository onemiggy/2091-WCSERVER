var http = require('http');

var server = http.createServer(function (req, res) {
  if (req.url == '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(
      '<html><h1>Welcome to my Node.JS Application.</h1><body><p>Welcome Juan Miguel Enriquez. This is an activity about basics of node JS</p></body></html>'
    );
    res.end();
  } else if (req.url == '/student') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html><body><p>This is about page Page.</p></body></html>');
    res.end();
  } else if (req.url == '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(
      '<html><body><p>This is The Student Page.</p><p>Hello Enriquez Juan Miguel, This activty will teach you on how to create a simple server and local moduels in Nodejs.</p></body></html>'
    );
    res.end();
  } else res.end('Invalid Request!');
});

server.listen(5000);
console.log('Node.js web server is at port 5000 is running..');
