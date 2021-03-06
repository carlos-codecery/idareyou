(function() {
  'use strict';

  angular
  .module('app.dare')
  .controller('Invite', Invite);

  Invite.$inject = ['$scope','$state', 'dareApi', 'info'];

  function Invite($scope,$state, dareApi, info) {
    var shell = $scope.shell;
    var dare = this;
    dare.info  = info;    

    dare.send = function(){
      if($scope.form.$valid){
        shell.showLoading();
        dareApi.send(dare.info,dare.email).then(function(result){
          $state.go('challenges');
          console.log(result);
        },function(error){
          console.log(error);
        }).finally(shell.hideLoading);
      }
    }


  }



})();
