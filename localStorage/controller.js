var app = angular.module("todolist",["LocalStorageModule"]);

app.controller("TodoControlador",function($scope,localStorageService){
	if(localStorageService.get("almacen")){
		$scope.todo = localStorageService.get("almacen");
	}else{
		$scope.todo = [];
	}
	$scope.addactividad = function(){
		$scope.todo.push($scope.newAct);
		$scope.newAct = {};
		localStorageService.set("almacen",$scope.todo);
	};
	
	$scope.limpiar = function(){
		$scope.todo = [];
		localStorageService.set("almacen",$scope.todo);
	};
});