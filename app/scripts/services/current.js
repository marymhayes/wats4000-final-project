'use strict';

/**
 * @ngdoc service
 * @name wats4000App.current
 * @description
 * # current
 * Factory in the wats4000App.
 */

  angular.module('MMTimeMachine')
  .factory('current', function ($resource) {

    // Public API here
    return $resource('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=8e283f36de4cdc9e73178b9c438b2de7&tags=:tags&is_commons=true&extras=path_alias%2C+description%2C+url_m&format=json&nojsoncallback=1&', {}, {
      query: {
        method:'GET',
        params:{
          tags: null
        },
        isArray:false
      }
    });

  });
