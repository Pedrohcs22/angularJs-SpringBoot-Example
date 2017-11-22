indexModule.service('EnumsREADService', [ '$http', function($http) {

	this.listarTracoes = function () {
		return $http.get('/listarTracoes');
	}
	
	this.listarCategorias = function () {
		return $http.get('/listarCategorias');
	}
} ]);
