weatherApp.directive("forecastResult",[function(){
	return {
			restrict: "E",
			templateUrl: "directives/templates/forecastResult.html",
			replace: true,
			scope: {
				forecastData: '=',
				fahrenheit: '&',
					dateFormat: '@'
			}
	};
}]);