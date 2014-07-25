function IndexCtrl($scope) {
  $scope.header = "TurboRango";
  $scope.menu = [{
    texto: "Restaurantes",
    href: "#/restaurantes",
    ativo: true
  }, {
    texto: "Cardápio",
    href: "#/",
    ativo: false
  }, {
    texto: "Sortear onde almoçar!",
    href: "#/",
    ativo: false
  }];
}
