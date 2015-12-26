weatherApp.controller(
	"ForecastCtrl", 
	[
		"$scope", 
		"$log", 
		"$resource", 
		"$routeParams",
		"Forecast", 
		function($scope, $log, $resource, $routeParams, Forecast){
	
		$scope.city = Forecast.city;
		$scope.days = $routeParams.days || '2';

		$scope.fahrenheit = function(degK){
			return (degK * 9/5 - 459.67).toFixed(2);
		}
		
		
	// using $resource calling external API
		var Weather = $resource(
			"http://api.openweathermap.org/data/2.5/forecast/daily");
		$scope.forecastData = Weather.get({ q: $scope.city, cnt: $scope.days, appid: "14b6336a06531afe246fc4e99b60b7c8"});
	
	
		// using $http calling external API
		//	 apiUrl = "http://api.openweathermap.org/data/2.5/forecast/daily?q=" + $scope.forecast.city + "&cnt=" + interval +
		//    "&appid=14b6336a06531afe246fc4e99b60b7c8";
		//		$http({
		//			method: 'GET',
		//			url: apiUrl,
		//		})
		//		.then(
		//			function successCallback(response){
		//				$scope.forecastData = response.data.list;
		//			}, 
		//			function errorCallback(response){
		//					$scope.error = response;
		//					$log.info($scope.error);
		//			}
		//		);
		//		
		}
	]
);