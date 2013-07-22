var fs = require('fs');

var express = require('express');

var app = express.createServer(express.logger());
app.use(express.static(__dirname + '/public'));
app.get('/', function(request, response) {
	var indexContents = fs.readFileSync('index.html').toString();
	response.send(indexContents);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port + " for dirname " + __dirname);
});