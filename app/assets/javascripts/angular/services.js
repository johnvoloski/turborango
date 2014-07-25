app.service('restaurants', function() {

  this.storageKey = 'turboRango_restaurants';

  this.get = function() {
    return angular.fromJson(localStorage.getItem(this.storageKey)) || [];
  };

  this.set = function(restaurantes) {
    localStorage.setItem(this.storageKey, angular.toJson(restaurantes));
  }

});
