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
    return $http.get('/restaurants/near.json');
  }
});
