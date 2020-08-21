var app = angular.module("todolist",["LocalStorageModule"]);
app.factory('PrimerServicio',function(localStorageService){

	var obj = {};

	obj.key = "almacen";


	if(localStorageService.get(obj.key)){
		obj.actividades = localStorageService.get(obj.key);
	}else{
		obj.actividades = [];
	}

	obj.add = function(newAct){
		obj.actividades.push(newAct);
		obj.updateAlmacen();
	}
	obj.updateAlmacen = function(){
		localStorageService.set(obj.key,obj.actividades);
	}
	obj.limpiar = function(){
		obj.actividades = [];
		obj.updateAlmacen();
	}
	obj.getALL = function(){
		return obj.actividades;
	}
	obj.eliminarAct = function(act){
		obj.actividades = obj.actividades.filter(function(actividad){
			return actividad !== act;
		});
		obj.updateAlmacen();
		return obj.getALL();
		
	}

	return obj;//aki retornar algo por que es el comportamiento de los factories pero puedes retornar cualquier cosa...
});
app.controller("TodoControlador",function($scope,PrimerServicio){
		
	$scope.todo = PrimerServicio.getALL();
	$scope.newAct={};
	$scope.addactividad = function(newAct){
		PrimerServicio.add($scope.newAct);
	}
	$scope.eliminar = function(act){
		PrimerServicio.eliminarAct(act);
	}
	$scope.limpiar = function(act){
		PrimerServicio.limpiar();
	}
	
});