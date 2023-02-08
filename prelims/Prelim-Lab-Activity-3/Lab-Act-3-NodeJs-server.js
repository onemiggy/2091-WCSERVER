var http = require('http');

var server = http.createServer(function (req, res) {
  if (req.url == '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(
      '<html><h1>Welcome to my Node.JS Application.</h1><body><p>Welcome Juan Miguel Enriquez. This is an activity about basics of node JS</p></body></html>'
    );
    res.end();
  } else if (req.url == '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(
      '<html><body><h1>This is about page Page.</h1><p>Hello Miguel Enriquez, if you want additional details about this activity go to this site https://www.tutorialsteacher.com/nodejs/nodejs-tutorials</p></body></html>'
    );
    res.end();
  } else if (req.url == '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(
      '<html><body><h1>This is The Student Page.</h1><p>Hello Enriquez Juan Miguel, This activty will teach you on how to create a simple server and local moduels in Nodejs.</p></body></html>'
    );
  } else if (req.url == '/gallery') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(
      '<html><body><p>This is Gallery.</p><p>Hello Enriquez Juan Miguel, This activty will teach you on how to create a simple server and local moduels in Nodejs.</p></body></html>'
    );
    res.end();
  } else res.end('Invalid Request!');
});

server.listen(5000);
console.log('Node.js web server is at port 5000 is running..');
