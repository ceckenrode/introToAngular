var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope, $log, $filter){

  $scope.name = "john";
  $scope.formattedName = $filter('uppercase')($scope.name);

  $log.info($scope.name);
  $log.info($scope.formattedName);

});