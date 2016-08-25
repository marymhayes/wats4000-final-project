'use strict';

/**
 * @ngdoc overview
 * @name wats4000App
 * @description
 * # wats4000App
 *
 * Main module of the application.
 */
angular
  .module('wats4000App', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngStorage', // added to enable localStorage features as per tutorial
    'ngTouch'
  ])
  .config(["$routeProvider", function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

'use strict';

/**
 * @ngdoc function
 * @name wats4000App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wats4000App
 */
angular.module('wats4000App')
.controller('MainCtrl', ["$scope", "current", "$timeout", function ($scope, current, $timeout) {

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
}]);
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

'use strict';

/**
 * @ngdoc function
 * @name wats4000App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the wats4000App
 */
angular.module('wats4000App')
  .controller('AboutCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

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
  .factory('current', ["$resource", function ($resource) {
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

  }]);

angular.module('wats4000App').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/about.html',
    "<p>Thinking thoughts and words.</p> <div ng-app ng-init=\"firstnum=1;secondnum=2\"> <input type=\"number\" min=\"0\" ng-model=\"firstnum\"> plus <input type=\"number\" min=\"0\" ng-model=\"secondnum\"> equals <b>{{firstnum + secondnum}}</b> </div>"
  );


  $templateCache.put('views/main.html',
    "<div ng-app class=\"jumbotron\" ng-controller=\"MainCtrl\"> <img src=\"../images/time_machine_graphic.jpg\" id=\"spiral\" alt=\"Black and white swirl graphic\"> <h1>Mary's Marvelous Time Machine</h1> <p class=\"lead\"> <div ng-init=\"location='Seattle'\"> <p> <label for=\"location\">Where are you standing? <input type=\"text\" name=\"tags\" ng-model=\"tags\"> </label> </p> <p> <!--  <button class=\"btn btn-lg btn-primary\" ng-click=\"blastoff()\">Blast Off</button> --> <button class=\"btn btn-lg btn-primary\" ng-click=\"blastoff()\"> <span ng-show=\"searchButtonText == 'Taking Off'\"><i class=\"glyphicon glyphicon-refresh spinning\"></i></span> {{ searchButtonText }} </button> </p> <dl> <!--<dt>Currently</dt>--> <dd> <img ng-src=\"{{photos.photos.photo[0].url_m}}\"> <p ng-bind-html=\"photos.photos.photo[0].description._content\"> </p> </dd> <!--<dd>{{current.weather[0].description}}</dd>\n" +
    "        <dt>Temperature</dt>\n" +
    "        <dd>{{current.main.temp}}</dd>\n" +
    "        <dt>Wind</dt>\n" +
    "        <dd>{{current.wind.speed}} mph at {{current.wind.deg}} degrees</dd>\n" +
    "        <dt>Clouds</dt>\n" +
    "        <dd>{{current.clouds.all}}%</dd>--> </dl> </div> </p> </div>"
  );

}]);
