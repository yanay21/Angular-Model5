(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.user = {};

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      console.log(response.data);
      var shName = category;
      var dataData = [];
      for(var key in response.data)
      {
          if(key === shName)
          {
              dataData.push(response.data[key]);
          }
      }

      var dataItems = dataData[0].menu_items;
      console.log(dataItems);
      //return dataItems;
    });
  };

  service.getFavouriteDish = function(number_favourite_dish){
    return $http.get(ApiPath + '/menu_items/' + number_favourite_dish + '.json');
  }
  service.saveUser = function(user,favouriteDish){
    angular.copy(user, service.user);
    service.user.favouriteDish = favouriteDish;
    console.log(service.user);
  }
  service.getUser = function(){
    return service.user;
  }

}



})();
