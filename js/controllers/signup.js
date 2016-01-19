'use strict';

// signup controller
app.controller('SignupFormController', ['$scope', '$http','$state','SignResource','toaster','multipartForm', function($scope, $http, $state,SignResource,toaster,multipartForm) {
    $scope.user = {};
    $scope.customer = {};
    $scope.toaster = {
        type: 'success',
        title: 'Exito',
        text: 'Usuario Registrado con Exito'
    };
    $scope.authError = null;
    $scope.signup = function($response) {
            console.log($scope.user);
            var uploadUrl='http://localhost:8000/hinchas';
            multipartForm.post(uploadUrl,$scope.user);
            toaster.pop();
            
        
    }
     $scope.pop = function(){
        toaster.pop($scope.toaster.type, $scope.toaster.title, $scope.toaster.text);
    };

  }])
 ;