angular.module('feed-reader')

.directive('emailLink', function(){
  return {
    restrict: 'E',
    template: '<div><a href="mailto:emailnitram@gmail.com">Email Me!</a></div>'
  }
})

.directive('star', function(){
  return {
    restrict: 'A',
    link: function(scope, element, attrs){
      element.on('click', function(){
        element.append('<span class="glyphicon glyphicon-star"></span>');
      });
    }
  }
})

.directive('tooltip', function(){
  return {
    restrict: 'A',
    link: function(scope, element, attrs){
      element.mouseover(function(){
        element.append('<div class="tool-tip">Click to Comment</div>')
      })
      element.mouseout('hover',function(){
        element.children('div').remove();
      })
    }
  }
})

.directive('pic', function(){
  return {
    restrict: 'E',
    scope: {
      "src": "@",
      "caption": "@"
    },
    template: '<div><img ng-src="{{src}}" width="200" height="200"><div>{{caption}}</div></div>'
  }
})

.directive('picTwo', function(){
  return {
    restrict: 'E',
    scope: {
      "src": "=",
      "caption": "="
    },
    template: '<div><img ng-src="{{src}}" width="200" height="200"><div>{{caption}}</div></div>'
  }
})

.directive('sorter', function(){
  return {
    restrict: 'E',
    template: '<button ng-click="sort();" class="sort">Sort</button>',
    link: function(scope, element, attrs){
      scope.sort = function(){
        scope.predicate = scope.predicate === 'score' ? '-score' : 'score';
      }
    }
  }
})
