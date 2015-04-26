/*
  * Inject the service you built that handles ajax requests
  * Use this service to fetch data from Reddit (bind to a property on $scope)
*/

angular.module('feed-reader')
.controller('feedController', function($scope, redditService, $stateParams){
  $scope.feed_name = $stateParams.subreddit;
  redditService.getFeed($scope.feed_name, $scope);
});
