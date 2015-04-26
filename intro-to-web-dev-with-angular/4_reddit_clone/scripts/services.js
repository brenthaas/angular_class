/*
  * Inject the service used to make ajax requests
  * Create a method on service to fetch data from the reddit api
    - For instance a GET request to 'http://www.reddit.com/r/tech.json'
*/

angular.module('feed-reader')
.factory('redditService', function(){
  var redditUrl = 'http://www.reddit.com/r/';

  var service = {

  };

  return service;

});

