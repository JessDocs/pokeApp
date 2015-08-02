var app = angular.module('pokeFun', ['ngRoute']);

app.config(function($routeProvider){

  $routeProvider
  
    .when('/', {
      templateUrl: 'js/home/homeTmpl.html',
      controller: 'HomeController'
    })


    .otherwise({
      redirectTo: '/'
    });
	
})