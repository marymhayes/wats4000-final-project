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
}]);

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

  angular.module('wats4000App')
  .factory('current', ["$resource", function ($resource) {

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

  }]);

angular.module('wats4000App').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/about.html',
    "<div ng-app class=\"jumbotron\" ng-controller=\"MainCtrl\"> <!--  <img src= \"../images/time_machine_graphic.jpg\" id=\"spiral\" alt=\"Black and white swirl graphic\">\n" +
    "--> <div> <p id=\"aboutText\">Flickr’s The Commons is a collection of historical images curated in partnership with dozens of institutions and their public photography archives. <br> <br>Mary’s Marvelous Time Machine uses The Commons to offer you a glimpse back in time; to see the past of the place you occupy. </p> </div> </div>"
  );


  $templateCache.put('views/main.html',
    "<div ng-app class=\"jumbotron\" ng-controller=\"MainCtrl\"> <!--<div><img src= \"../images/time_machine_graphic.jpg\" id=\"spiral\" alt=\"Black and white swirl graphic\">\n" +
    "  </div> --> <h1>Mary's Marvelous Time Machine</h1> <p class=\"lead\"> <div ng-init=\"location='Seattle'\"> <p> <label for=\"location\">Where are you standing? <input id=\"location\" type=\"text\" name=\"tags\" ng-model=\"tags\"> </label> </p> <p> <button class=\"btn btn-lg btn-primary\" ng-click=\"blastoff()\"> <span ng-show=\"searchButtonText == 'ZOOOSH ZOOOSH ZOOOOOOOSH DING DING DING'\"><i class=\"glyphicon glyphicon-refresh spinning\"></i></span> {{ searchButtonText }} </button> </p> <dl> <dd> <img ng-src=\"{{photos.photos.photo[0].url_m}}\"> <p ng-bind-html=\"photos.photos.photo[0].description._content\"> </p> </dd> </dl> </div> </p> </div>"
  );

}]);
