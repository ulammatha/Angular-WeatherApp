weatherApp.controller("HomeCtrl", ["$scope", "$location", "$log", "Forecast", function($scope, $location, $log, Forecast){
	$scope.city = Forecast.city;
	$scope.$watch('city', function(){
		Forecast.city = $scope.city;
	});
	
	$scope.go = function(path){
		$location.path( path );
	};
	
}]);