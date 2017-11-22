indexModule.config(function($routeProvider) {
    $routeProvider
    .when("/consulta", {
        templateUrl : "templates/view/consulta.html",
        controller: "consultaCarroCtrl",
        controllerAs : "consultaCtrl"
    })
    .when("/cadastro", {
        templateUrl : "templates/view/cadastro.html",
        controller: "cadastraCarroCtrl",
        controllerAs : "cadastraCtrl"
    })
    .otherwise({
        templateUrl : "templates/view/welcome.html"
    });
});