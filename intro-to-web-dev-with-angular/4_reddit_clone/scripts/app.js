angular.module('feed-reader', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/feed/nba');

  $stateProvider
    .state('feed',{
      url: '/feed/:subreddit',
      templateUrl: 'feedView.html',
      controller: 'feedController'
    })
})
