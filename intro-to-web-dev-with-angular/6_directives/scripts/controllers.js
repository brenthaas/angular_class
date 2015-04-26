angular.module('feed-reader')

.controller('homeController', function($scope){
  $scope.sharkSrc = "http://static.ddmcdn.com/gif/great-white-shark-200x200.jpg";
  $scope.sharkCaption = "Shark!!!";
})

.controller('nbaController', 'redditService', function($scope, redditService){
  $scope.title = 'NBA';
  redditService.getData('nba').then(function(data){
    $scope.stories = data;
  });
})


.controller('nflController', 'redditService', function($scope, redditService){
  $scope.title = 'NFL';
  redditService.getData('nfl').then(function(data){
    $scope.stories = data;
  });
})


.controller('mlbController', 'redditService', function($scope, redditService){
  $scope.title = 'MLB';
  redditService.getData('mlb').then(function(data){
    $scope.stories = data;
  });
})