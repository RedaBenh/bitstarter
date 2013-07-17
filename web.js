var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
//  response.send('Hello World 2!');
	//var buf = new Buffer(256);
var data = fs.readFileSync('/index/html', []);
	//var len = fs.readSync('/index.html', buf, 0, 100, 0);
	response.send(data);

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
