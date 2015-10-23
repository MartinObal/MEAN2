angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
		//Pagina Inicial
		.when('/', {
			templateUrl : 'views/home.html',
			controller : 'MainController'
		})
		//Pagina dos nerds
		.when('/nerds', {
			templateUrl : 'views/nerd.html',
			controller : 'NerdController'
		});

	$locationProvider.html5Mode(true);
}]);