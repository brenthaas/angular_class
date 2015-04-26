/*
  * Inject the service used to make ajax requests
  * Create a method on service to fetch data from the reddit api
    - For instance a GET request to 'http://www.reddit.com/r/tech.json'
*/

angular.module('feed-reader')
.factory('redditService', function($http){

  var service = {
    getFeed: function(subreddit) {
      var redditUrl = 'http://www.reddit.com'
      var subredditUrl = redditUrl + '/r/' + subreddit + '.json';
      return $http.get(subredditUrl).then(function(response){
          var results = [];
          var posts = response.data.data.children

          for(var i = 0; i < posts.length; i++) {
            item = posts[i].data;
            results.push({
              title: item.title,
              url: item.url,
              num_comments: item.num_comments,
              score: item.score,
              comments_url: redditUrl + item.permalink
            });
          }
          return results;
        }
      );
    }
  }
  return service;
});


