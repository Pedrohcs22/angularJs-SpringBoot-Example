angular.module('app').controller('cadastraCarroCtrl', [ '$scope', 'CarroCRUDService', 'EnumsREADService', 'ModeloCRUDService' ,
	'FabricanteCRUDService', 'ValidationsService', '$location', '$stateParams' ,
		function($scope, CarroCRUDService, EnumsREADService, ModeloCRUDService, FabricanteCRUDService,
				ValidationsService, $location, $stateParams) {
			var carroCtrl = this;
			var isAlteracao = false;
		
			// Default não para mensagem de erro
			carroCtrl.exibeErro = false;
			
			retrieveById();
			
			function retrieveById() {
				if($stateParams.carroId !== undefined) {
					carroParaAlteracao = CarroCRUDService.recuperarCarro($stateParams.carroId).then(
							function success (response) {
								setCarroParaAlteracao(response.plain());
							},
							function failure (response) {
								console.log('Carro não existe');
							});
				}				
			}
			
			carroCtrl.carroParaAlteracao = CarroCRUDService.getCarroParaAlteracao();
			setCarroParaAlteracao(carroCtrl.carroParaAlteracao);			
			
			function setCarroParaAlteracao(carro) {
				if(!$.isEmptyObject(carro)) {
					carroCtrl.carro = carro;
					isAlteracao = true;
					carroCtrl.textBotaoSubmit = 'Salvar';
				} else {
					carroCtrl.carro = {};
					carroCtrl.textBotaoSubmit = 'Cadastrar';
				}				
			}
			
			CarroCRUDService.setCarroParaAlteracao({});
			carroCtrl.novoFabricante = {};
			
			// Iniciando enumerações
			EnumsREADService.listarTracoes().then(
					function success(response) {
						carroCtrl.tracoes = response.plain();
					},
					function error(response) {
						console.log('ERRO AO RECUPERAR TRACOES ' + response);
					}
			);
			EnumsREADService.listarCategorias().then(
					function success(response) {
						carroCtrl.categorias = response.plain();
					},
					function error(response) {
						console.log('ERRO AO RECUPERAR CATEGORIAS ' + response);
					}
			);
			
			function atualizarModelos() {
				ModeloCRUDService.listarModelos().then(
						function success(response) {
							carroCtrl.modelos = response.plain();
						},
						function error(response) {
							console.log('ERRO AO RECUPERAR MODELOS' + response);
						}
				);
			}
			
			carroCtrl.setarModelo = function () {
				carroCtrl.modelos.forEach(function(m) {
					if(m.descricao === carroCtrl.carro.modelo.descricao) {
						carroCtrl.carro.modelo.id = m.id;
					} else {
						carroCtrl.carro.modelo.id = null;
					}
					
					console.log(carroCtrl.carro.modelo.id);
				});
			}
			
			carroCtrl.validarPlaca = function() {
				if(carroCtrl.carro.placa != undefined && carroCtrl.carro.placa != '') {				
					// Valida placa repetida
					var idCarro = carroCtrl.carro.id;
					if(idCarro === undefined || idCarro === '') {
						ValidationsService.isPlacaRepetida(carroCtrl.carro.placa).then(function(response) {
							if(response === false) {
								carroCtrl.exibeErro = false;
							} else {
								carroCtrl.exibeErro = true;
								carroCtrl.mensagemErro = 'A placa inserida já está cadastrada !';
							}
						});						
					} else {
						ValidationsService.isPlacaRepetidaId(carroCtrl.carro.placa, idCarro)
							.then(function(response) {
							if(response === false) {
								carroCtrl.exibeErro = false;
							} else {
								carroCtrl.exibeErro = true;
								carroCtrl.mensagemErro = 'A placa inserida já está cadastrada !';
							}
						});
					}
				}
				
				return !carroCtrl.exibeErro;
			}
			
			// Método de inserção
			carroCtrl.salvarCarro = function () {
				carroCtrl.setarModelo();
				CarroCRUDService.salvarCarro(carroCtrl.carro).then(function (response) {
					$location.path('/carros');
				});
			}
			
			carroCtrl.atualizarFabricantes = function () {
				FabricanteCRUDService.listarFabricantes().then(
						function success(response) {
							carroCtrl.fabricantes = response.plain();
						},
						function error(response) {
							console.log('ERRO AO RECUPERAR FABRICANTES ');
							console.log(response);
						}
				);
			}
			
			carroCtrl.exibeCamposCadastroFabricante = false;
			
			carroCtrl.filtrarFabricantes = function () {
				if(carroCtrl.novoFabricante.nome !== undefined && carroCtrl.novoFabricante.nome !== '') {
					var newList = carroCtrl.fabricantes.filter(function(fab) {
						return String(fab.nome).includes(carroCtrl.novoFabricante.nome);
					});
					carroCtrl.fabricantes = newList;
				} else {
					carroCtrl.atualizarFabricantes();
				}
				
				if(carroCtrl.fabricantes.length === 0) {
					carroCtrl.exibeCamposCadastroFabricante = true;
				} else {
					carroCtrl.exibeCamposCadastroFabricante = false;
				}
			}
			
			carroCtrl.selecionarFabricante = function (fabricante) {
				carroCtrl.carro.fabricante = fabricante;
			}
			
			carroCtrl.cadastrarFabricante = function () {
				carroCtrl.carro.fabricante = {};
				carroCtrl.carro.fabricante.nome = carroCtrl.novoFabricante.nome;
				carroCtrl.carro.fabricante.pais = carroCtrl.novoFabricante.pais;
			}
			
			atualizarModelos();
			carroCtrl.atualizarFabricantes();
			
		} ]);