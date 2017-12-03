angular.module('app').service('ValidationsService', ['Restangular', function(Restangular) {

	this.isPlacaRepetidaId = function (placa, id) {
		return Restangular.one("isPlacaRepetida", placa).customGET(id);
	}
	
	this.isPlacaRepetida = function (placa) {
		return Restangular.one('isPlacaRepetida', placa).get();
	}
	
}]);