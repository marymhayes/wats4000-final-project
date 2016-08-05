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

    // Public API here
    return $resource('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=87f2686b12488c018926068ec8881545&tags=West+Seattle&extras=url_t%2C+url_q&format=json&nojsoncallback=1&', {}, {
      query: {
        method:'GET',
        params:{
          tag: ''
        },
        isArray:false
      }
    });
  });
