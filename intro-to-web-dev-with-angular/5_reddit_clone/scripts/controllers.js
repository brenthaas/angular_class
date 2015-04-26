angular.module('feed-reader')

.controller('homeController', function($scope){
})

.controller('nbaController', function($scope, redditService){
  $scope.title = 'NBA';
  redditService.getData('nba').then(function(data){
    $scope.stories = data;
  });
})


.controller('nflController', function($scope, redditService){
  $scope.title = 'NFL';
  redditService.getData('nfl').then(function(data){
    $scope.stories = data;
  });
})


.controller('mlbController', function($scope, redditService){
  $scope.title = 'MLB';
  redditService.getData('mlb').then(function(data){
    $scope.stories = data;
  });
});
