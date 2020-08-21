var app = angular.module("PrimeraDirectiva",[]);

app.controller("MiPrimerControlador",function($scope,$http){
	$http({
		method: 'GET',
		url: "https://api.github.com/users/codigofacilito/repos",
	}).then(function(response){
			console.log(response.data);
			$scope.repos = response.data; 
		},
		function(err){
			console.error(err);
		});
	
});