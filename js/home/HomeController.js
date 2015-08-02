app.controller('HomeController', function ($scope, pokemonService, $http) {
	$scope.getPokemons = function() {
      	pokemonService.getPokemon().then(function(response) {
            $scope.pokemons = response;
        })
    }

    $scope.getPokemons();
    
    $scope.getPokemonInfo = function(pokeId) {
    	pokemonService.getPokemonInfo(pokeId).then(function(response) {
    		console.log(response);
            $scope.currentPokemon = response;
    	})
    }

});