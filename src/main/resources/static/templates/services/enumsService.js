indexModule.service('EnumsREADService', ['Restangular', function(Restangular) {

	this.listarTracoes = function () {
		return Restangular.all('listarTracoes').getList();
	}
	
	this.listarCategorias = function () {
		return Restangular.all('listarCategorias').getList();
	}
} ]);
