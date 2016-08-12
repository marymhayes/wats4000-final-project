angular.module('wats4000App').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/about.html',
    "<p>Thinking thoughts and words.</p> <div ng-app ng-init=\"firstnum=1;secondnum=2\"> <input type=\"number\" min=\"0\" ng-model=\"firstnum\"> plus <input type=\"number\" min=\"0\" ng-model=\"secondnum\"> equals <b>{{firstnum + secondnum}}</b> </div>"
  );


  $templateCache.put('views/main.html',
    "<div ng-app class=\"jumbotron\" ng-controller=\"MainCtrl\"> <h1>Mary's Marvelous Time Machine</h1> <p class=\"lead\"> <div ng-init=\"location='Seattle'\"> <p> <label for=\"location\">Where are you standing? <input type=\"text\" name=\"tags\" ng-model=\"tags\"> </label> </p> <p> <button class=\"btn btn-lg btn-primary\" ng-click=\"blastoff()\">Blast Off</button> </p> <dl> <dt>Currently</dt> <dd> <img ng-src=\"{{photos.photos.photo[0].url_q}}\"></dd> <dd>{{current.weather[0].description}}</dd> <dt>Temperature</dt> <dd>{{current.main.temp}}</dd> <dt>Wind</dt> <dd>{{current.wind.speed}} mph at {{current.wind.deg}} degrees</dd> <dt>Clouds</dt> <dd>{{current.clouds.all}}%</dd> </dl> </div> </p> </div>"
  );

}]);
