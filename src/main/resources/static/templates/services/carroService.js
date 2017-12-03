indexModule.service('CarroCRUDService', ['Restangular', function(Restangular) {
	var carrosRest = Restangular.all('carros');
	var carroAlterado = null;
	var savedData = {};
	
	this.listarCarros = function () {
		return carrosRest.getList();
	}
	
	this.deletarCarro = function (idCarro) {
		Restangular.one('carros', idCarro).remove();
	}
	
	this.setCarroParaAlteracao = function (data) {
	   savedData = data;
	}
	
	this.getCarroParaAlteracao = function () {
	  return savedData;
	}
	
	this.salvarCarro = function (carro) {
		carrosRest.post(carro);
	}
	
} ]);
