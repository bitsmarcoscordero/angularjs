var app = angular.module("PrimeraDirectiva",[]);
app.directive('backImg',function(){
	return function(scope,element,attrs){
		attrs.$observe('backImg',function(value){
			element.css({
				"background": "url("+value+")",
				"background-size": "cover",
				"background-position": "center",
			});
		});
	};
})
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