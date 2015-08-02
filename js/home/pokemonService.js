app.service('pokemonService', function($http, $q) {
  
  this.getPokemon = function() {
    var deferred = $q.defer();
    var url = 'http://pokeapi.co/api/v1/pokedex/1/';
    
    $http({
      method: 'GET',
      url: url
    }).then(function(response) {
        deferred.resolve(response.data.pokemon)
    })
    return deferred.promise;
  };

  this.getPokemonInfo = function(pokeId) {
    console.log(pokeId)
    var deferred = $q.defer();
    var url = 'http://pokeapi.co/' + pokeId

    $http({
      method: 'GET',
      url: url
    }).then(function(response) {
      deferred.resolve(response.data)
    })
    return deferred.promise;
  };
    
    
});
            

