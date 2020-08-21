var app = angular.module("MiPrimerApp",[]);

app.controller("MiPrimerControlador",function($scope,$http){
	
	$scope.posts = [
		{
			'title' : "Primero",
			'body' : "Primero Primero Primero Primero Primero Primero"
		},
		{
			'title' : "Primero",
			'body' : "Primero Primero Primero Primero Primero Primero"
		},
		{
			'title' : "Primero",
			'body' : "Primero Primero Primero Primero Primero Primero"
		},
		{
			'title' : "Primero",
			'body' : "Primero Primero Primero Primero Primero Primero"
		},
		{
			'title' : "Primero",
			'body' : "Primero Primero Primero Primero Primero Primero"
		},
	]; 
	
	
	/*function(){
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
	};*/
	
});