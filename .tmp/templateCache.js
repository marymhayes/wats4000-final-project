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
