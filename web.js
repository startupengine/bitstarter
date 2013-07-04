
var fs = require('fs');
var read = new Buffer(16);
read = fs.readFileSync('index.html');


var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(read.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
