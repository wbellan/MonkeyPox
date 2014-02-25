module.exports = function(app) {

	var http = require("http");
	var request = require("request");

	getLocationInfo = function (req, res) {
		request("http://ipinfo.io/", function(error, response, body) {
			console.log(body);
			res.send(body);
		});
	};

	getGeoLocationInfo = function (req, res) {
		request("http://ipinfo.io/geo/", function(error, response, body) {
			console.log(body);
			res.send(body);
		});
	};

	getCityInfo = function (req, res) {
                request("http://ipinfo.io/city/", function(error, response, body) {
                        console.log(body);
                        res.send(body);
                });
	};

	getOrgInfo = function (req, res) {
                request("http://ipinfo.io/org/", function(error, response, body) {
                        console.log(body);
                        res.send(body);
                });
	};

	app.get('/loc', getLocationInfo);
	app.get('/loc/geo', getGeoLocationInfo);
	app.get('/loc/city', getCityInfo);
	app.get('/loc/org', getOrgInfo);
}
