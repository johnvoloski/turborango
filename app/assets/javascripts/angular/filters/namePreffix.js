'use strict';

app.filter('namePreffix', function() {
  return function(text) {
    return "Restaurante " +  text;
  }
});
