angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, $http, Links) {
  // Your code here
  $scope.url = {
        link: 'http://www.google.com'
      };

  $scope.addLink = function(link){
    console.log(link);

    $http.post("/api/links", {status:201, url:link});
    $scope.url.link = '';
  };
});
