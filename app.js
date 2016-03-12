var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', '$log', function($scope, $filter, $log){
  $scope.handle = "";

  $scope.lowercasehandle = function() {
    return $filter('lowercase')($scope.handle);
  };

  $scope.characters = 5;

}]);