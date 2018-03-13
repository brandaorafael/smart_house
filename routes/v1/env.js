module.exports = function (moduleEnv){
  
  var controllers = moduleEnv.controllers;

  return function(router){
    router.get("/env", function(req, res){
    	controllers.env.get(req, res);
    });
  }

}