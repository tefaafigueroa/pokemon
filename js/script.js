var Pokemon = angular.module("Pokemon",[])
Pokemon.controller("ListadoPokemon",function($scope,$rootScope,$http){
	$scope.Lista = [];
	for(var y=1; y<=900;y++){
		$http({
		metho:"GET",
		url:"https://pokeapi.co/api/v2/pokemon/"+y
	}).then(function data(x){
		$scope.Lista.push(x);
	})
	}
	
});