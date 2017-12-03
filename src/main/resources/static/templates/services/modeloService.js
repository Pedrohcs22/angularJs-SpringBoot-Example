indexModule.service('ModeloCRUDService', ['Restangular', function(Restangular) {

	this.listarModelos = function () {
		return Restangular.all('modelos').getList();
	}
} ]);
