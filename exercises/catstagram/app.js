var app = angular.module('catstagram', []);
app.controller('CatController', ['$scope', '$http', function($scope, $http){

	$http.get('data.json')
		.success(function(data, status, headers, config) {
			$scope.cats = data.cats;
			console.log('$scope.cats', $scope.cats)
		});
	$scope.like = function(index) {
		$scope.cats[index].likes ++;
	}

	$scope.addCat = function(newCat) {
		newCat.likes = 1;
		$scope.cats.unshift(newCat);
		$scope.newCat = {};
	}
}]);
