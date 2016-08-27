'use strict';

/**
 * @ngdoc function
 * @name wats4000App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wats4000App
 */
angular.module('MMTimeMachine')
.controller('MainCtrl', function ($scope, current, $timeout) {

 $scope.searchButtonText = "Blast Off";
 $scope.test = "false";

 $scope.blastoff = function () {
   $scope.test = "true";
   $scope.searchButtonText = "ZOOOSH ZOOOSH ZOOOOOOOSH DING DING DING";

   $scope.photos = current.query({
     tags: $scope.tags
     //lat: $scope.lat,
     //lon: $scope.lon
   });

   $timeout(function(){
     $scope.searchButtonText = "Blast Off";
   }, 1500);
 };
});
