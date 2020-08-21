var app = angular.module("MiPrimerApp",[]);

app.controller("MiPrimerControlador",["$scope",function(s){
	s.nombre = "algo";
	s.nuevo = {};
	s.comentarios = [
		{
			comentario: "Buen codigo estas tirando",
			usuario: "marcos"
		},
		{
			comentario: "te ekibocas mucho codigo estas tirando",
			usuario: "pepe"
		},
	];
	s.addComentario = function(){
			s.comentarios.push(s.nuevo);
			s.nuevo = {};
	};
}]);