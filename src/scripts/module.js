// Create a new Angular module with the name WeatherApp.
// The second parameter are the dependencies and even if there are none,
// you will need to pass and empty array.
var app = angular.module('WeatherApp', []);

// Create a new controller named MainController.
// The controller function can take several parameters, that will be dependency injected
// by AngularJS. In this case we inject the $scope and the $http service.
app.controller('MainController', function($scope, $http) {
	
	// Attach an array of places to the $scope.
	// Only variables on the $scope will be available in the view (HTML).
	$scope.places = [
		{ name: 'Berlin', code: 'Berlin,DE' },
		{ name: 'Buxtehude', code: 'Buxtehude,DE' },
		{ name: 'Karlsruhe', code: 'Karlsruhe,DE' },
		{ name: 'London', code: 'London,UK' },
		{ name: 'Paris', code: 'Paris,FR' },
		{ name: 'Springfield', code: 'Springfield,US' }
	];

	// Attach a method that can be called from the view (HTML) to the $scope.
	$scope.loadWeather = function(place) {
		// Query for the weather at an open weather API.
		$http.get('http://api.openweathermap.org/data/2.5/weather?units=metric&q=' + place.code)
			.then(function(response) {
				// This method will be called when the HTTP request finished and the response
				// will be passed to this method. The actual body of the response can be
				// accessed via .data.
				$scope.weather = response.data;
			});
	};
});