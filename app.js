var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', '$log','$http', function($scope, $filter, $log, $http) {
  $scope.handle = "";

  $scope.lowercasehandle = function() {
    return $filter('lowercase')($scope.handle);
  };

  $scope.characters = 5;

  // $scope.rules = [{ rulename: "Must be at least 5 characters" }, { rulename: "Must not be used elsewhere" },
  //   { rulename: "Must be cool" }

  // ];

  $http.get('http://www.omdbapi.com/?t=spider-man&y=&plot=full&r=json').success(function(result){
    console.log(result)
    $scope.rules = result;

  }).error(function(data, status){
    console.log(status);
  })

  $scope.alertClick = function(){

    alert("clicked!");
  }

}]);
