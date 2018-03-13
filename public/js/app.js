angular.module('SmartHouse', [])

.controller("appController", ["$rootScope", "$http", "$scope",  function($rootScope, $http, $scope){
	var appCtrl = this;

	var ligado = true;

	$scope.ligado = "LIGADO";

	$http.get('/v1/env').success(function(data){
		var socket = io.connect(data.url);

		socket.on('lightsOnOff', function(lights){
	    	ligado = !ligado;

	    	ligar(ligado);

	    	console.log($scope.ligado);
	    });
	});


    appCtrl.click = function(){
        $http.post('/v1/lights').success(function(data){
        	console.log("Request deu certo!");
        });
    }

    

    var ligar = function(ligado){
    	if(ligado){
    		$scope.ligado = "LIGADO";
    	} else {
    		$scope.ligado = "DESLIGADO";
    	}

    	$scope.$apply();
    }

    console.log($scope.ligado);

	// $rootScope.api = "http://localhost:3000/"

 //    if(localStorageService.get('home')){
 //        $rootScope.viewFlag = localStorageService.get('home');
 //    } else {
 //        $rootScope.viewFlag = 1;
 //    }

 //    if(localStorageService.get('logado')){
 //        $rootScope.isLogado = true;
 //    } else {
 //        $rootScope.isLogado = false;
 //    }

 //    $http.get($rootScope.api + 'v1/cortesia/get')
 //        .success(function(data){
 //            localStorageService.set('cortesia', data.cortesia);
 //        });

 //    $rootScope.carrinhoProduto = [];

 //    // constantes das paginas
 //    $rootScope.home = 1;
 //    $rootScope.detalhe = 2;
 //    $rootScope.login = 3;
 //    $rootScope.cadastro = 4;
 //    $rootScope.produtos = 5;
 //    $rootScope.contato = 6;
 //    $rootScope.carrinho = 7;
 //    $rootScope.esquecisenha = 8;
 //    $rootScope.minhaconta = 9;
 //    $rootScope.sobrerafael = 10;
 //    $rootScope.adm = 11;
 //    $rootScope.cadastrarproduto = 12;
 //    $rootScope.buscarproduto = 13;
 //    $rootScope.removerproduto = 14;
 //    $rootScope.alterarproduto = 15;
 //    $rootScope.cadastrarfuncionario = 16;
 //    $rootScope.buscarfuncionario = 17;
 //    $rootScope.removerfuncionario = 18;
 //    $rootScope.alterarfuncionario = 19;
 //    $rootScope.buscarcliente = 20;
 //    $rootScope.removercliente = 21;
 //    $rootScope.supervisor = 22;
 //    $rootScope.funcionario = 23;
 //    $rootScope.alterarcliente = 24;
 //    $rootScope.meuspedidos = 25;
 //    $rootScope.devolucao = 26;
 //    $rootScope.checkout = 27;
 //    $rootScope.cadastrarendereco = 28;
 //    $rootScope.alterarendereco = 29;
 //    $rootScope.removerendereco = 30;
 //    $rootScope.enderecounico = 31;


 //    $rootScope.addProduto = function(produto){
 //        CarrinhoService.addProduto(produto);
 //    }

 //    appCtrl.goTo = function(id){
 //        $rootScope.viewFlag = id;
 //    }

 //    appCtrl.goToConta = function(){
 //        if($rootScope.isLogado){
 //            $rootScope.viewFlag = localStorageService.get('conta');
 //        } else {
 //            $rootScope.viewFlag = 3;
 //        }
 //    }

 //    appCtrl.goToCategoria = function(idProduto){
 //        // Salvar produto no service
 //        $rootScope.viewFlag = $rootScope.produtos;
 //    }

}])
;