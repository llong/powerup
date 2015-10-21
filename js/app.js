var app = angular.module("powerUp",[]);


app.controller('mainCtrl',['$scope','$http',function($scope,$http){
	$http.get('js/icons.json').
		success(function(data){
			$scope.icons = data;
			console.log($scope.icons);
		});
}]);