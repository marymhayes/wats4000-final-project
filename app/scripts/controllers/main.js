'use strict';

/**
 * @ngdoc function
 * @name wats4000App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wats4000App
 */
angular.module('wats4000App')
.controller('MainCtrl', function ($scope, current) {
  $scope.tags = "West Seattle";
  $scope.photos = current.query({
    tags: $scope.tags
  });

  $scope.blastoff = function () {
    $scope.photos = current.query({
      tags: $scope.tags
      //lat: $scope.lat,
      //lon: $scope.lon
    });
  };
});
