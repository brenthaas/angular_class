angular.module('feed-reader', ['ui.router'])
.config(function($stateProvider, $urlRouteProvider){

  $urlRouteProvider.otherwise('/brent');

  $stateProvider
  .state('brent', {
    url: '/brent',
    templateUrl: '<div>Brent</div>',
    controller('brentController', )
  })
  .state('steve', {
    url: '/steve',
    templateUrl: '<div>Steve</div>'
  })
});
