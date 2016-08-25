"use strict";angular.module("wats4000App",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngStorage","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("wats4000App").controller("MainCtrl",["$scope","$routeParams","current","$localStorage",function(a,b,c,d){a.tags="",a.blastoff=function(){a.photos=c.query({tags:a.tags}),console.log(a.photos.photo[0])},a.savePic=function(a){var b={id:a.id,url:a.url_l};if(d.savedPics){for(var c=!0,e=0;e<d.savedPics.length;e++)d.savedPics[e].id===b.id&&(c=!1);c===!0?d.savedPics.push(b):console.log("city already saved")}else d.savedPics=[b]}}]),angular.module("wats4000App").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("wats4000App").factory("current",["$resource",function(a){return a("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=8e283f36de4cdc9e73178b9c438b2de7&tags=:tags&is_commons=true&extras=path_alias%2C+description%2C+url_l&format=json&nojsoncallback=1&",{},{query:{method:"GET",params:{tags:null},isArray:!1}})}]),angular.module("wats4000App").run(["$templateCache",function(a){a.put("views/about.html",'<p>Thinking thoughts and words.</p> <div ng-app ng-init="firstnum=1;secondnum=2"> <input type="number" min="0" ng-model="firstnum"> plus <input type="number" min="0" ng-model="secondnum"> equals <b>{{firstnum + secondnum}}</b> </div>'),a.put("views/main.html",'<div ng-app class="jumbotron" ng-controller="MainCtrl"> <img src="../images/time_machine_graphic.5dbfa6bf.jpg" id="spiral" alt="Black and white swirl graphic"> <h1>Mary\'s Marvelous Time Machine</h1> <p class="lead"> <div ng-init="location=\'Seattle\'"> <p> <label for="location">Where are you standing? <input type="text" name="tags" ng-model="tags"> </label> </p> <p> <button class="btn btn-lg btn-primary" ng-click="blastoff()">Blast Off</button> </p> <dl> <!--<dt>Currently</dt>--> <dd> <img ng-src="{{photos.photos.photo[0].url_l}}"> <p ng-bind-html-unsafe="{{photos.photos.photo[0].description._content}}"> </p></dd> <!--<dd>{{current.weather[0].description}}</dd>\n        <dt>Temperature</dt>\n        <dd>{{current.main.temp}}</dd>\n        <dt>Wind</dt>\n        <dd>{{current.wind.speed}} mph at {{current.wind.deg}} degrees</dd>\n        <dt>Clouds</dt>\n        <dd>{{current.clouds.all}}%</dd>--> </dl> </div> </p> </div>')}]);