var app = angular.module("MiPrimerApp",[]);

app.controller("MiPrimerControlador",function($scope,$http){
	$scope.posts = [];
	$scope.get = false;
	$scope.post = false;
	$scope.allpost = function(){
		$http({
			method: 'GET',
			url: "https://jsonplaceholder.typicode.com/posts"
		}).then(function(response){
				console.log(response.data);
				$scope.posts = response.data;
				$scope.get = true;
				$scope.post = false;
			},
			function(err){
				console.error(err);
			});
	};
	
	$scope.nuevo = {};	
	$scope.addpost = function(){
		$http({
		method: 'POST',
		url: "https://jsonplaceholder.typicode.com/posts",
		data: {
			title: $scope.nuevo.titulo,
			userId: 1,
			body: $scope.nuevo.body,
		}
	}).then(function(response){
			console.log(response);
			$scope.posts = response.data;
			$scope.get = false;
			$scope.post = true;
			$scope.nuevo = {};
		},
		function(err){
			console.error(err);
		});
		
	};
});