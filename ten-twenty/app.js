var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var port = '8080';

app.configure(function() {
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
});

app.get('/', function(req, res) {
	res.send("What's your twenty?");
});

routes = require('./routes/locapi')(app);

server.listen(port, function() {
	console.log("Server is running at http://localhost:" + port);
});
