var app = angular.module("mainModulo",[]);

app.filter("eliminarHTML",function(){
	return function(texto){
		return String(texto).replace(/<[^>]+>/gm,'');
	}
});
app.controller("filtroControlador",function($scope){
	$scope.mihtml = "<p>Hola mundo</p>";
});