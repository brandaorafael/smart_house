module.exports = function(express, path, io){

	//Lights
	var lights = {};
	lights.controllers = {};
	lights.controllers.power = require(__dirname + '/modules/lights/power-controller.js')(io);

	//Env
	var env = {};
	env.controllers = {};
	env.controllers.env = require(__dirname + '/modules/env/env-controller.js')();

	//Rotas
	var routes = {};
	routes.routes = require(__dirname + '/routes/router.js')(express, routes);
	routes.v1 = {};
	routes.v1.lights = require(__dirname + '/routes/v1/lights.js')(lights);
	routes.v1.env = require(__dirname + '/routes/v1/env.js')(env);
	routes.view = {};
	routes.view.view = require(__dirname + '/routes/views/views.js')(path);

	return routes.routes;

}