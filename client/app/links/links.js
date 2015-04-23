angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $http, $location, Links) {
  $scope.data = {};


  $scope.getLinks = function(){
    $http.get('/api/links').
      success(function(data, status, headers, config) {
        $scope.data.links = data;
        console.log(data);

      });
    };

  $scope.getLinks();

});
