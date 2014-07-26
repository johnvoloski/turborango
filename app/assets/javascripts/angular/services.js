app.service('restaurants', function($q, $http) {

  this.storageKey = 'turboRango_restaurants';

  this.get = function() {
    return $http.get('/restaurants.json');
  };

  this.set = function(restaurants) {
    if (restaurants) {
      restaurants.forEach(function(i, v) {
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

  this.nearBy = function() {

    deferred = $q.defer();

    navigator.geolocation.getCurrentPosition(

      // onSuccess
      function(pos) {

        var route = '/restaurants/near.json?latitude=:lat&longitude=:long'.replace(':lat', pos.coords.latitude).replace(':long', pos.coords.longitude);
        $http.get(route).then(function(response) {
          console.log(response);
          deferred.resolve(response.data);
        });
      },

      // onError
      function(err) {
        deferred.reject("Unable to get current position :(, error: ", err);
      }

    );

    return deferred.promise;
  }
});
