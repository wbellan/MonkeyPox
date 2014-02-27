module.exports = function(app) {

	var request = require("request");

	function execute(res, url) {
	    request(url, function(error, response, body) {
	            console.log(body);
	            res.send(body);
	    });
	}

	app.get('/loc', function(req, res) {
		console.log("app.get all loc info");
		execute(res, "http://ipinfo.io/");
	});

	/*
		Type can be one of the following:
		1. geo
		2. city
		3. org
		4. country
		5. region
		6. ip
		7. loc
		It makes a call to ipinfo.io to retrieve 
		the information you are seeking.
	*/
	app.get('/loc/:type', function(req, res) {
		console.log("app.get with the type");
		execute(res, "http://ipinfo.io/" + req.params.type + "/");
	});
}
