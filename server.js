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
	//https://lodash.com/
	app._				= require('lodash');
	//https://github.com/expressjs/multer
	app.multer  		= require('multer');
	// Arquivo de configuracoes
  	// app.config 			= require('./config')();

	//Lights
	var lights = {};
	lights.controllers = {};
	lights.controllers.power = require(__dirname + '/modules/lights/power-controller.js')();

	//Middleware
	// var middleware = {};
	// var storage = app.multer.diskStorage({
	//   destination: function (req, file, cb) {
	//     cb(null, __dirname + '/public/images/produto/')
	//   },
	//   filename: function (req, file, cb) {
	//     app.crypto.pseudoRandomBytes(16, function (err, raw) {
	//       cb(null, raw.toString('hex') + app.path.extname(file.originalname));
	//     });
	//   }
	// });
	// middleware.upload = app.multer({ storage: storage });

	//Rotas
	var routes = {};
	routes.routes = require(__dirname + '/routes/router.js')(app.express, routes);
	routes.v1 = {};
	routes.v1.lights = require(__dirname + '/routes/v1/lights.js')(lights);

	return {
		app: app,
		router: routes.routes
	}

}