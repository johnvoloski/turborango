function IndexCtrl($scope) {
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
}

function RestaurantCtrl($scope, restaurants) {

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

  $scope.cadastrar = function(novo) {
    var diaCardapio = angular.copy(novo);
    // Caso o array de cardápio esteja vazio, inicializa
    if (!$scope.restaurantBeingEdited.menu) {
      $scope.restaurantBeingEdited.menu = [];
    }
    $scope.restaurantBeingEdited.menu.push(diaCardapio);
  };

  /*
  * Predicado utilizado para ordenação dos pratos dos dias.
  * @param dia Dia a ser comparado no algoritmo de ordenação.
  * @return Índice resultante em que o item deverá se encontrar após ordenação.
  */
  $scope.sortDiasCardapio = function(dia) {
    var index = $scope.diasSemana.map(function(i) {
      return i.value;
    }).indexOf(dia.weekday.value);
    return index;
  };
}

function WhereToEatCtrl($scope, restaurants) {

  // taken from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  random = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  $scope.feedbackMessage = "Iniciando o turbo...";

  restaurants.nearBy().then(function(results) {

    // se algum restaurante possuir um prato com Bacon, é óbvio que ele deve ser o escolhido ;)
    // só considere os 3 restaurantes mais próximos
    var chosenIndex = random(0, 2);
    $scope.feedbackMessage = results[chosenIndex].name;
    // removing chosen from the OTHER options (it is already being displayed above)
    results.splice(chosenIndex, 1);
    $scope.placesOptions = results;

  });
}
