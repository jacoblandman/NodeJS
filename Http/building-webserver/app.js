var http = require('http');
var fs = require('fs');

// function takes a callback
// this function also returns an object that we can listen to
http.createServer( function(req, res) {

  // 200 is status, the other object is header info that the browser will understand
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  fs.createReadStream(__dirname + '/index.htm').pipe(res);

}).listen(1337, '127.0.0.1'); // 1337 is the port. The other number is the local ip address
