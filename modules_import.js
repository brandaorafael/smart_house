module.exports = function(){

	var app = {};
	//http://expressjs.com/
	app.express 		= require('express');
	//https://nodejs.org/api/path.html
	app.path 			= require('path');
	// http://www.embeddedjs.com/
	app.ejs 			= require('ejs');
	//https://nodejs.org/api/http.html#http_http
	app.http 			= require('http');
	//https://github.com/expressjs/morgan
	app.morgan         	= require('morgan');
	//Esse é o que deixa eu usar req.body https://github.com/expressjs/body-parser
	app.bodyParser     	= require('body-parser');
	//https://github.com/expressjs/method-override
	app.methodOverride 	= require('method-override');
	//https://socket.io
	app.io              = require('socket.io');

	return app;
}

