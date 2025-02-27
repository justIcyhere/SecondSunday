
const app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
  $routeProvider.when("/", {
    templateUrl: "./sp.html",
    controller: "spController",
  })
  .when("/detail/:id",{
    templateUrl:"detail.html",
    controller:"detailCtrl"
  })
  
  
});
