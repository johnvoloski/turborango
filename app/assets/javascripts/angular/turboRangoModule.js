var app = angular.module('turboRango', [ 'ngRoute' ]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/restaurantes', {
        templateUrl: 'templates/restaurantes.html',
        controller: 'RestauranteCtrl'
      })
  }
]);
