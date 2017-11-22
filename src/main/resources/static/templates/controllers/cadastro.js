indexModule.controller('cadastraCarroCtrl', [ '$scope', 'CarroCRUDService', 'EnumsREADService', 'ModeloCRUDService' ,
		function($scope, CarroCRUDService, EnumsREADService, ModeloCRUDService) {
			var carroCtrl = this;
			
			carroCtrl.carro = {};
			
			// Iniciando enumerações
			EnumsREADService.listarTracoes().then(
					function success(response) {
						carroCtrl.tracoes = response.data;
					},
					function error(response) {
						console.log('ERRO AO RECUPERAR TRACOES ' + response);
					}
			);
			EnumsREADService.listarCategorias().then(
					function success(response) {
						carroCtrl.categorias = response.data;
					},
					function error(response) {
						console.log('ERRO AO RECUPERAR CATEGORIAS ' + response);
					}
			);
			
			function atualizarModelos() {
				ModeloCRUDService.listarModelos().then(
						function success(response) {
							carroCtrl.modelos = response.data;
						},
						function error(response) {
							console.log('ERRO AO RECUPERAR MODELOS' + response);
						}
				);
			}
			
			atualizarModelos();

		} ]);