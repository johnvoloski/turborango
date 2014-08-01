'use strict';

app.controller('RestaurantCtrl', [ '$scope', 'restaurants', function ($scope, restaurants) {

  $scope.headerCadRest = "Cadastro de restaurantes";

  restaurants.get().then(function(result) {
    $scope.restaurants = result.data;
  });

  /*
   * Cadastra um novo restaurante.
   * @param novo Novo restaurante a ser cadastrado.
   */
  $scope.create = function(novo) {
    $scope.novoRest = angular.copy(novo);
    $scope.restaurants.push($scope.novoRest);
    restaurants.add($scope.novoRest);
  }

  /*
   * Remove o restaurante do escopo.
   * @param restaurante Restaurante existente no escopo que deverá ser removido.
   */
  $scope.$$remove = function(restaurant) {
    var indice = $scope.restaurants.indexOf(restaurant);
    if (indice > -1) {
      restaurants.remove(restaurant);
      $scope.restaurants.splice(indice, 1);
    }
    $scope.restaurantBeingEdited = null;
  }

  $scope.$watch('restaurants', function() {
    //restaurants.set($scope.restaurants);
  }, true);

}]);
