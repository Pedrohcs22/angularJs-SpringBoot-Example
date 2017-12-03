angular.module('app').service('CarroCRUDService', ['Restangular', function(Restangular) {
	var carrosRest = Restangular.all('carros');
	var carroAlterado = null;
	var savedData = {};
	
	this.listarCarros = function () {
		return carrosRest.getList();
	}
	
	this.deletarCarro = function (idCarro) {
		return Restangular.one('carros', idCarro).remove();
	}
	
	this.recuperarCarro = function (idCarro) {
		return Restangular.one('carros', idCarro).get();
	}
	
	this.setCarroParaAlteracao = function (data) {
	   savedData = data;
	}
	
	this.getCarroParaAlteracao = function () {
	  return savedData;
	}
	
	this.salvarCarro = function (carro) {
		return carrosRest.post(carro);
	}
	
} ]);
