'use strict';

/* Controllers */

function StudentListCtrl($scope, $http) {
  
  $http.get('/students').success(function(data) {
    $scope.students = data;
  });

  $scope.addStudent = function() {
    var newstudent = {"firstname": $scope.firstnametext,"lastname": $scope.lastnametext,"rollnumber": $scope.rollnumber};

  	 $http({
        url: '/addstudent',
        method: "POST",
        data: JSON.stringify(newstudent),
        headers: {'Content-Type': 'application/json'}
      }).success(function (data, status, headers, config) {
             $scope.students.push(newstudent);
             $scope.firstnametext = '';
    		 $scope.lastnametext = '';
    		 $scope.rollnumber = '';
      }).error(function (data, status, headers, config) {
            
      });
  };
};

angular.module('schoolApp', []).controller('StudentListCtrl', ['$scope', '$http', StudentListCtrl]);
