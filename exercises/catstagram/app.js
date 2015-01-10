var app = angular.module('catstagram', []);
app.controller('CatController', ['$scope', '$http', function($scope, $http){

	//Get the cats data using $http from data.json and assign the data to $scope.cats variable
	$http.get('data.json')
		.success(function(data, status, headers, config) {
			$scope.cats = data.cats;
			console.log('$scope.cats', $scope.cats)
		});

	//Write a $scope.like function that takes index as an argument and adds 1 to likes attribute
	$scope.like = 

	//Add newCat to the beginning of the $scope.cats array
	$scope.addCat = 
}]);
