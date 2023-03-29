(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService'];
function SignUpController(MenuService) {
  var vm = this;
  vm.dishNotFound = "";
  vm.submit = function(){

    var promise = MenuService.getFavouriteDish(vm.user.favouriteDish);
    promise.then(function(response){
      vm.dishNotFound = "Your information has been saved";
      MenuService.saveUser(vm.user,response.data);
      //console.log(response.data);
    })
    .catch(function(error){
      vm.dishNotFound = "No such menu number exists";
    });

  }
}

})();
