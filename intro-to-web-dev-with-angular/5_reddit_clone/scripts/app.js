angular.module('feed-reader', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home',{
      url: '/',
      templateUrl: 'home.html',
      controller: 'homeController'
    })
    .state('nba',{
      url: '/nba',
      templateUrl: 'feedView.html',
      controller: 'nbaController'
    })
    .state('nfl',{
      url: '/nfl',
      templateUrl: 'feedView.html',
      controller: 'nflController'
    })
    .state('mlb',{
      url: '/mlb',
      templateUrl: 'feedView.html',
      controller: 'mlbController'
    });
});
