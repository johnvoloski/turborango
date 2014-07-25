app.service('restaurantes', function() {

  this.get = function() {
    return angular.fromJson(localStorage.getItem('restaurantes')) || [];
  };
  this.set = function(restaurantes) {
    localStorage.setItem('restaurantes', angular.toJson(restaurantes));
  }

});
