'use strict';

/**
 * @ngdoc service
 * @name wats4000App.current
 * @description
 * # current
 * Factory in the wats4000App.
 */

          // location: null
          // Only images from The Commons
          // Longitude (lon)
          // Latitude (lat)
          // geo_context
          // tags
          // extras
          // Street Address
          // Intersection
          // Street
          // Neighborhood
          // City
          // State/Province/Region
          // Country


  angular.module('wats4000App')
  .factory('current', function ($resource) {
    // Service logic
    // ...
// https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=87f2686b12488c018926068ec8881545&tags=West+Seattle&extras=url_t%2C+url_q&format=json&nojsoncallback=1&
// &lat=:lat&lon=:lon

    // Public API here
    return $resource('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=8e283f36de4cdc9e73178b9c438b2de7&tags=:tags&is_commons=true&extras=path_alias%2C+description%2C+url_m&format=json&nojsoncallback=1&', {}, {
      query: {
        method:'GET',
        params:{
          tags: null
          //lat: null,
          //lon: null
          //geo: ''
        },
        isArray:false
      }
    });

  });
