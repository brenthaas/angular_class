angular.module('feed-reader', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('feed',{
      url: '/',
      templateUrl: 'feedView.html',
      controller: 'feedController'
    })

})