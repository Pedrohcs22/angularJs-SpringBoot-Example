indexModule.service('CarroCRUDService', [ '$http', function($http) {

	this.listarCarros = function () {
		return $http.get('/listarCarros');
	}
	
	this.deletarCarro = function (idCarro) {
		return $http.delete('/deletarCarro/' + idCarro);
	}
} ]);
