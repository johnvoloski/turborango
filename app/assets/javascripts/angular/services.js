app.service('restaurants', function($q, $http) {

  this.storageKey = 'turboRango_restaurants';

  this.get = function() {
    deferred = $q.defer();

    $http.get('/restaurants.json').then(function(response) {
      deferred.resolve(response.data);
    });

    return deferred.promise;
  };

  this.set = function(restaurantes) {
    if (restaurantes) {
      restaurantes.forEach(function(i, v) {
        var route = '/restaurants/:id.json'.replace(':id', i.id);

        $http.put(route, i).then(function(response) {
          console.log(response);
        });
      });
    }
  }

  this.add = function(restaurant) {
    if (restaurant) {
      $http.post('/restaurants.json', restaurant);
    }
  }

  this.remove = function(restaurant) {
    if (restaurant) {
      var route = '/restaurants/:id.json'.replace(':id', restaurant.id);
      $http.delete(route, restaurant);
    }
  }
});
