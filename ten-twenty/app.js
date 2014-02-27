var express = require('express');
var app = express();

app.configure(function() {
	app.set("port", process.env.PORT || 8080);
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
});

app.get('/', function(req, res) {
	res.send("What's your twenty?");
});

routes = require('./routes/location')(app);

module.exports = app;
