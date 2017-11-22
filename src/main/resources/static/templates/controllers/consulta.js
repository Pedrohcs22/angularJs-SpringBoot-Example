indexModule.filter('normalizar', function() {
	return function ( input )
    {
		var lowerCase = input.toLowerCase();
        return lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
    };
});

indexModule.controller('consultaCarroCtrl', [ '$scope', 'CarroCRUDService',
		function($scope, CarroCRUDService) {
			var carroCtrl = this;
			
			carroCtrl.hasCarros = false;
			
			CarroCRUDService.listarCarros().then(function success(response) {
				carroCtrl.carros = response.data;
				carroCtrl.hasCarros = carroCtrl.carros.length !== 0;
			}, function error(response) {
				console.log('ERRO AO RECUPERAR CARROS : ' + response);
			});
			
			carroCtrl.alterarCarro = function(idCarro) {
				console.log('alterando' + idCarro);
			}
			
			carroCtrl.deletarCarro = function (idCarro) {
				CarroCRUDService.deletarCarro(idCarro).then(function success(response) {
					carroCtrl.carros = response.data;
					carroCtrl.hasCarros = carroCtrl.carros.length !== 0;
				}, function error(response) {
					console.log('ERRO AO DELETAR CARRO : ' + idCarro);
				});
			}
			
		} ]);

// http://www.baeldung.com/angularjs-crud-with-spring-data-rest
