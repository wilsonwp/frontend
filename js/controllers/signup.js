'use strict';

// signup controller
app.controller('SignupFormController', ['$scope', '$http','$state','SignResource','toaster', function($scope, $http, $state,SignResource,toaster) {
    $scope.user = {};
    $scope.toaster = {
        type: 'success',
        title: 'Exito',
        text: 'Usuario Registrado con Exito'
    };
    $scope.authError = null;
    $scope.signup = function($response) {
            try {
                SignResource.save($scope.user);
                $scope.pop();
                $state.go('access.signin', {});
            }catch(err){
                $scope.toaster.type='error';
                $scope.toaster.title='error';
                $scope.toaster.text='Ha ocurrido un Error al Registrar';
                $scope.pop();
            }
            
        
    }
     $scope.pop = function(){
        toaster.pop($scope.toaster.type, $scope.toaster.title, $scope.toaster.text);
    };

  }])
 ;