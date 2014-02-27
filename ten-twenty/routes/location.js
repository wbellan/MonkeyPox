module.exports = function(app) {

	var request = require("request");

	getLocationInfo = function (req, res) {
		execute(res, "http://ipinfo.io/");
	};

	getGeoLocationInfo = function (req, res) {
		execute(res, "http://ipinfo.io/geo/");
	};

	getCityInfo = function (req, res) {
		execute(res, "http://ipinfo.io/city/");
	};

	getOrgInfo = function (req, res) {
		execute(res, "http://ipinfo.io/org/");
	};

	function execute(res, url) {
	    request(url, function(error, response, body) {
	            console.log(body);
	            res.send(body);
	    });
	}

	app.get('/loc', getLocationInfo);
	app.get('/loc/geo', getGeoLocationInfo);
	app.get('/loc/city', getCityInfo);
	app.get('/loc/org', getOrgInfo);
}
