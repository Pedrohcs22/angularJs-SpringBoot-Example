indexModule.config(function($stateProvider, $urlRouterProvider) {
	 	$urlRouterProvider.otherwise("/home")
	 
		var consultaState = {
			name : 'consulta',
			url : '/carros',
	        templateUrl : "templates/view/consulta.html",
	        controller: "consultaCarroCtrl",
	        controllerAs : "consultaCtrl"
		}

		var cadastroState = {
			name : 'cadastraCarro',
			url : '/carro',
	        templateUrl : "templates/view/cadastro.html",
	        controller: "cadastraCarroCtrl",
	        controllerAs : "cadastraCtrl"
		}
		var mainState = {
			name : 'home',
			url : '/home',
			templateUrl : "templates/view/welcome.html"
		}

		$stateProvider.state(consultaState);
		$stateProvider.state(cadastroState);
		$stateProvider.state(mainState);
});