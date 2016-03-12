var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', '$log', function($scope, $filter, $log){
  $scope.handle = "";

  $scope.lowercasehandle = function() {
    return $filter('lowercase')($scope.handle);
  };

$scope.$watch('handle', function(newValue, oldValue) {
console.info('Changed!');
console.log('old: ' + oldValue);
console.log('new: ' + newValue);
});

setTimeout(function() {

$scope.$apply(function() {
    $scope.handle = 'newhandle';
console.log('$scope changed');
});

}, 3000);

}]);