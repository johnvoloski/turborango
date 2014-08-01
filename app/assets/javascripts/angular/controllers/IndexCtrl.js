'use strict';

app.controller('IndexCtrl', [ '$scope', function ($scope) {

  $scope.header = "TurboRango";
  $scope.links = [{
    text: "Restaurantes",
    href: "/restaurants",
    isActive: true
  }, {
    text: "Cardápio",
    href: "/",
    isActive: false
  }, {
    text: "Descobrir onde almoçar!",
    href: "/where-to-eat",
    isActive: true
  }];
}]);
