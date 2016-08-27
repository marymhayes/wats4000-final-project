angular.module('MMTimeMachine').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/about.html',
    "<div ng-app class=\"jumbotron\" ng-controller=\"MainCtrl\"> <img src=\"../images/time_machine_graphic.jpg\" id=\"spiral\" alt=\"Black and white swirl graphic\"> <div> <p id=\"aboutText\">Flickr’s The Commons is a collection of historical images curated in partnership with dozens of institutions and their public photography archives. <br> <br>Mary’s Marvelous Time Machine uses The Commons to offer you a glimpse back in time; to see the past of the place you occupy. </p> </div></div>"
  );


  $templateCache.put('views/main.html',
    "<div ng-app class=\"jumbotron\" ng-controller=\"MainCtrl\"> <img src=\"../images/time_machine_graphic.jpg\" id=\"spiral\" alt=\"Black and white swirl graphic\"> <h1>Mary's Marvelous Time Machine</h1> <p class=\"lead\"> <div ng-init=\"location='Seattle'\"> <p> <label for=\"location\">Where are you standing? <input id=\"location\" type=\"text\" name=\"tags\" ng-model=\"tags\"> </label> </p> <p> <button class=\"btn btn-lg btn-primary\" ng-click=\"blastoff()\"> <span ng-show=\"searchButtonText == 'ZOOOSH ZOOOSH ZOOOOOOOSH DING DING DING'\"><i class=\"glyphicon glyphicon-refresh spinning\"></i></span> {{ searchButtonText }} </button> </p> <dl> <dd> <img ng-src=\"{{photos.photos.photo[0].url_m}}\"> <p ng-bind-html=\"photos.photos.photo[0].description._content\"> </p> </dd> </dl> </div> </p> </div>"
  );

}]);
