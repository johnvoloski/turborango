'use strict';

app.controller('MenuCtrl', [ '$scope', function ($scope) {

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
}]);
