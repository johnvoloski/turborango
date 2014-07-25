function IndexCtrl($scope) {
  $scope.header = "TurboRango";
  $scope.links = [{
    text: "Restaurantes",
    href: "#/restaurants",
    isActive: true
  }, {
    text: "Cardápio",
    href: "#/",
    isActive: false
  }, {
    text: "Sortear onde almoçar!",
    href: "#/",
    isActive: false
  }];
}

function RestaurantCtrl($scope, restaurants) {

  $scope.headerCadRest = "Cadastro de restaurantes";
  $scope.restaurants = restaurants.get();

  /*
   * Cadastra um novo restaurante.
   * @param novo Novo restaurante a ser cadastrado.
   */
  $scope.cadastrar = function(novo) {
    $scope.novoRest = angular.copy(novo);
    $scope.restaurants.push($scope.novoRest);
  }

  /*
   * Remove o restaurante do escopo.
   * @param restaurante Restaurante existente no escopo que deverá ser removido.
   */
  $scope.remover = function(restaurante) {
    var indice = $scope.restaurants.indexOf(restaurante);
    if (indice > -1)
      $scope.restaurants.splice(indice, 1);
    $scope.restaurantBeingEdited = null;
  }

  $scope.$watch('restaurants', function() {
    restaurants.set($scope.restaurants);
  }, true);

}

function MenuCtrl($scope) {
  $scope.headerCadCardapio = "Cadastro de cardápio";
  $scope.diasSemana = [{
    name: 'Segunda-feira',
    value: 'Seg'
  }, {
    name: 'Terça-feira',
    value: 'Ter'
  }, {
    name: 'Quarta-feira',
    value: 'Qua'
  }, {
    name: 'Quinta-feira',
    value: 'Qui'
  }, {
    name: 'Sexta-feira',
    value: 'Sex'
  }, {
    name: 'Sábado',
    value: 'Sab'
  }, {
    name: 'Domingo',
    value: 'Dom'
  }];
  $scope.diaSelecionado = $scope.diasSemana[0]; // Padrão Segunda-feira
  $scope.cadastrar = function(novo) {
    var diaCardapio = angular.copy(novo);
    // Caso o array de cardápio esteja vazio, inicializa
    if (!$scope.restaurantBeingEdited.cardapio) {
      $scope.restaurantBeingEdited.cardapio = [];
    }
    $scope.restaurantBeingEdited.cardapio.push(diaCardapio);
  };

  /*
  * Predicado utilizado para ordenação dos pratos dos dias.
  * @param dia Dia a ser comparado no algoritmo de ordenação.
  * @return Índice resultante em que o item deverá se encontrar após ordenação.
  */
  $scope.sortDiasCardapio = function(dia) {
    var index = $scope.diasSemana.map(function(i) {
      return i.value;
    }).indexOf(dia.dia.value);
    return index;
  };
}