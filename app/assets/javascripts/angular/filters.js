app.filter('prefixoRestaurante', function() {
  return function(text) {
    return "Restaurante " +  text;
  }
});
