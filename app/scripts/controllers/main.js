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
  $scope.current = current.query();
});
