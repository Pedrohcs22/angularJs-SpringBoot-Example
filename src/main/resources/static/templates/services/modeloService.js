indexModule.service('ModeloCRUDService', [ '$http', function($http) {

	this.listarModelos = function () {
		return $http.get('/listarModelos');
	}
} ]);
