(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['user','MenuService'];
function MyInfoController(user,MenuService) {
  var vm = this;
  vm.registered = false;

  if(Object.keys(user).length == 0){
    vm.registered = false;
  }
  else{
    vm.registered = true;
    vm.registeredUser = user;
    vm.favouriteDish = user.favouriteDish;
  }
}

})();
