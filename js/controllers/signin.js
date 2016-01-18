'use strict';

/* Controllers */
  // signin controller
app.controller('SigninFormController', ['$scope', '$http', '$state','$auth','toaster', function($scope, $http, $state, $auth,toaster) {
    var credentials = {};
    $scope.toaster = {
        type: 'error',
        title: 'Ha Ocurrido un Error',
        text: 'Usuario o Contraseña Incorrecto'
    };
    $scope.login = function() {
    var credentials= {email:$scope.user.email,password:$scope.user.password};
    $scope.authError = null;
     $scope.respuesta = null;
    try{
       repuesta = $auth.login(credentials).then(function(result) {
                $state.go('app.partidos', {});
              
            });  
    }catch(error){
         $scope.pop();
    }
    
    
    };
    $scope.pop = function(){
        toaster.pop($scope.toaster.type, $scope.toaster.title, $scope.toaster.text);
    };
  }])
;