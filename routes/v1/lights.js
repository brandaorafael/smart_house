module.exports = function (moduleLights){
  
  var controllers = moduleLights.controllers;

  return function(router){
    router.post("/lights", function(req, res){
    	controllers.power.post(req, res);
    });
  }

}