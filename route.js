weatherApp.config(["$routeProvider", function($routeProvider){
	$routeProvider
	.when('/home', {
		templateUrl: 'controllers/templates/home.html',
		controller: 'HomeCtrl'
	})
	.when('/forecast', {
		templateUrl: 'controllers/templates/forecast.html',
		controller: 'ForecastCtrl'
	})
	.when('/forecast/:days', {
		templateUrl: 'controllers/templates/forecast.html',
		controller: 'ForecastCtrl'
	})
	.otherwise('/index')
}]);