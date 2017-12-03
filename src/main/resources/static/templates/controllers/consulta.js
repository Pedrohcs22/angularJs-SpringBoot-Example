indexModule.controller('consultaCarroCtrl', ['$location', '$scope', 'CarroCRUDService',
		function($location, $scope, CarroCRUDService) {
			var carroCtrl = this;
			
			carroCtrl.filtro = "";
			carroCtrl.hasCarros = false;
			carroCtrl.carros = [];
			
			// Lista Carros
			carroCtrl.atualizarCarros = function () {
				CarroCRUDService.listarCarros().then(function(carros) {
					carroCtrl.carros = carros.plain();
					carroCtrl.hasCarros = carroCtrl.carros.length !== 0;
				});
			}
			carroCtrl.atualizarCarros();
			
			carroCtrl.hasCarros = carroCtrl.carros.length !== 0;
			
			carroCtrl.filtrarCarros = function () {
				if(carroCtrl.filtro !== undefined && carroCtrl.filtro !== '') {
					var newList = carroCtrl.carros.filter(function(car) {
						return String(car.placa).toLowerCase().includes(carroCtrl.filtro.toLowerCase())
						|| String(car.modelo.descricao).toLowerCase().includes(carroCtrl.filtro.toLowerCase())
						|| String(car.tracao).toLowerCase().includes(carroCtrl.filtro.toLowerCase())
						|| String(car.categoria).toLowerCase().includes(carroCtrl.filtro.toLowerCase())
						|| String(car.fabricanteFormatado).toLowerCase().includes(carroCtrl.filtro.toLowerCase());
					});
					carroCtrl.carros = newList;
					carroCtrl.hasCarros = carroCtrl.carros.length !== 0;
				} else {
					console.log('Listando sem filtro');
					carroCtrl.atualizarCarros();
				}
			}
			
			// Método de alteração
			carroCtrl.alterarCarro = function (carro) {
				CarroCRUDService.setCarroParaAlteracao(carro);
				$location.path('/cadastro');
			}

			// Método de deleção
			carroCtrl.deletarCarro = function (idCarro) {
				CarroCRUDService.deletarCarro(idCarro);
				carroCtrl.atualizarCarros();
			}
			
			
		} ]);

// http://www.baeldung.com/angularjs-crud-with-spring-data-rest
