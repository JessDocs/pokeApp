app.directive('pokeDisplay', function(){
	return {
	    restrict: 'E',
	    templateUrl: 'js/directives/pokeDirective.html',
	    scope: {
	    	pokemon: '='
	    }
	}
})
