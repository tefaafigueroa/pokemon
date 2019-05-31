var pokemon = angular.module("pokemon",[])

pokemon.controller("Pokedex",function($scope,$rootScope,$http){

	$scope.pokedexB = [];
	for (var i = 1; i < 100; i++) {

			$http({
			method:"GET",
			url:"https://pokeapi.co/api/v2/pokemon/1"+i
		}).then(function callbacksucess(y){
			$scope.pokedexB.push(y)
		})
	}
})