var app = angular.module('turboRango', [ 'ngRoute' ]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/restaurants', {
        templateUrl: 'templates/restaurants.html',
        controller: 'RestaurantCtrl'
      })
  }
]);
