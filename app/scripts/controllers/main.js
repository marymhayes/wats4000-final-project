'use strict';

/**
 * @ngdoc function
 * @name wats4000App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wats4000App
 */
angular.module('wats4000App')
.controller('MainCtrl', function ($scope, current, $timeout) {

 $scope.searchButtonText = "Blast Off";
 $scope.test = "false";

 $scope.blastoff = function () {
   $scope.test = "true";
   $scope.searchButtonText = "Taking Off";

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
/*.controller('MainCtrl', function ($scope, $routeParams, current, $localStorage) {
  $scope.tags = "";
  //$scope.photos = current.query({
  //  tags: $scope.tags
//  });

  $scope.blastoff = function () {

    $scope.photos = current.query({
      tags: $scope.tags
      //lat: $scope.lat,
      //lon: $scope.lon

    });
        console.log($scope.photos.photo[0]);
  };
  $scope.savePic = function(pic){
    var picData = {
      'id'  : pic.id,
      'url' : pic.url_l
    };
    if (!$localStorage.savedPics){
      $localStorage.savedPics = [picData];
    } else {
      // We have already saved some cities.
      // Check to make sure we haven't already saved the current city.
      var save = true; // Initialize the save decision variable.
      // Use this loop to check if we've already saved the city.
      for (var i=0; i < $localStorage.savedPics.length; i++){
        if ($localStorage.savedPics[i].id === picData.id) {
          // This is a duplicate, so don't save (variable set to false).
          save = false;
        }
      }
      if (save===true){
        $localStorage.savedPics.push(picData);
      } else {
        console.log('city already saved');
      }
    }
  };
});*/
