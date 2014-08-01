'use strict';

app.controller('WhereToEatCtrl', [ '$scope', 'restaurants', function ($scope, restaurants) {

  $scope.feedbackMessage = "Iniciando o turbo...";

  // taken from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  restaurants.nearBy().then(function(results) {

    // se algum restaurante possuir um prato com Bacon, é óbvio que ele deve ser o escolhido ;)
    // só considere os 3 restaurantes mais próximos
    var chosenIndex = random(0, 2);
    $scope.feedbackMessage = results[chosenIndex].name;
    // removing chosen from the OTHER options (it is already being displayed above)
    results.splice(chosenIndex, 1);
    $scope.placesOptions = results;

  });


}]);
