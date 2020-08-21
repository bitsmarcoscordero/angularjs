var app = angular.module("todolist",["LocalStorageModule"]);
app.service('PrimerServicio',function(localStorageService){


	this.key = "almacen";


	if(localStorageService.get(this.key)){
		this.actividades = localStorageService.get(this.key);
	}else{
		this.actividades = [];
	}

	this.add = function(Act){
		this.actividades.push(Act);
		this.updateAlmacen();
	}
	this.updateAlmacen = function(){
		localStorageService.set(this.key,this.actividades);
	}
	this.limpiar = function(){
		this.actividades = [];
		this.updateAlmacen();
	}
	this.getALL = function(){
		return this.actividades;
	}
	this.eliminarAct = function(act){
		this.actividades = this.actividades.filter(function(actividad){
			return actividad !== act;
		});
		this.updateAlmacen();
		return this.getALL();
		
	}
})
app.controller("TodoControlador",function($scope,PrimerServicio){
		
	$scope.todo = PrimerServicio.getALL();
	$scope.newAct = {};
	$scope.addactividad = function(){
		PrimerServicio.add($scope.newAct);
		$scope.newAct = {};
	}
	$scope.eliminar = function(act){
		PrimerServicio.eliminarAct(act);
	}
	$scope.limpiar = function(act){
		PrimerServicio.limpiar();
	}
	
});