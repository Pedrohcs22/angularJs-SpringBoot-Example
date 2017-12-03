angular.module('app').config(function($stateProvider, $urlRouterProvider) {
	 	$urlRouterProvider.otherwise("/home")
	 
		var consultaState = {
			name : 'consulta',
			url : '/carros',
	        templateUrl : "templates/view/consulta.html"
		}

		var cadastroVarState = {
			name : 'cadastraCarroVar',
			url : '/carro/{carroId}',
	        templateUrl : "templates/view/cadastro.html"
		}
	 	
	 	var cadastroNoVarState = {
			name : 'cadastraCarro',
			url : '/carro',
	        templateUrl : "templates/view/cadastro.html"
		}
	 	
		var mainState = {
			name : 'home',
			url : '/home',
			templateUrl : "templates/view/welcome.html"
		}

		$stateProvider.state(consultaState);
		$stateProvider.state(cadastroVarState);
		$stateProvider.state(cadastroNoVarState);
		$stateProvider.state(mainState);
});