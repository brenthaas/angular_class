angular.module('feed-reader')
.factory('redditService', function(){
  var service = {
    getLastName: function(){
      return last;
    },
    setLastName: function(name){
      last = name
    }
  };
  return service;
})
