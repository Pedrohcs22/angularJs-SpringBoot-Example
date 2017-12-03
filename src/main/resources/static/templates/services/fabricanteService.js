indexModule.service('FabricanteCRUDService', ['Restangular', function(Restangular) {

	this.listarFabricantes = function () {
		return Restangular.all('fabricantes').getList();
	}
} ]);
