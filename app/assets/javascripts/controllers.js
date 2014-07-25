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

function RestauranteCtrl($scope, restaurantes) {

  $scope.headerCadRest = "Cadastro de restaurantes";
  $scope.restaurantes = restaurantes.get();

  /*
   * Cadastra um novo restaurante.
   * @param novo Novo restaurante a ser cadastrado.
   */
  $scope.cadastrar = function(novo) {
    $scope.novoRest = angular.copy(novo);
    $scope.restaurantes.push($scope.novoRest);
  }

  /*
   * Remove o restaurante do escopo.
   * @param restaurante Restaurante existente no escopo que deverá ser removido.
   */
  $scope.remover = function(restaurante) {
    var indice = $scope.restaurantes.indexOf(restaurante);
    if (indice > -1)
      $scope.restaurantes.splice(indice, 1);
    $scope.restauranteSendoEditado = null;
  }

  $scope.$watch('restaurantes', function() {
    restaurantes.set($scope.restaurantes);
  }, true);

}

function CardapioCtrl($scope) {
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
    if (!$scope.restauranteSendoEditado.cardapio) {
      $scope.restauranteSendoEditado.cardapio = [];
    }
    $scope.restauranteSendoEditado.cardapio.push(diaCardapio);
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
