indexModule.service('ValidationsService', ['Restangular', function(Restangular) {

	this.isPlacaRepetidaId = function (placa, id) {
		return Restangular.one('isPlacaRepetida', placa, id).get();
	}
	
	this.isPlacaRepetida = function (placa) {
		return Restangular.one('isPlacaRepetida', placa).get();
	}
	
}]);