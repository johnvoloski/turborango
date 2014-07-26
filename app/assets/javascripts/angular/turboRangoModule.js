var app = angular.module('turboRango', [ 'ngRoute' ]);

app.config(function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/restaurants', {
      templateUrl: 'templates/restaurants.html',
      controller: 'RestaurantCtrl'
    })
    .when('/where-to-eat', {
      templateUrl: 'templates/where-to-eat.html',
      controller: 'WhereToEatCtrl'
    });
  $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name="csrf-token"]').attr('content');
});
