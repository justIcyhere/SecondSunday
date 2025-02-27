const app = angular.module("myapp", ["ngRoute"]);
app.config(function ($routeProvider) {
  $routeProvider.when("/", {
    templateUrl: "view/sanpham.html",
    controller: "spController",
  })
  .when("/sp", {
    templateUrl: "view/sanpham.html",
    controller: "spController"
}).when("/sp/add",{
  templateUrl:"view/add.html",
  controller:"addCtrl"
})
.when("/sp/update/:id",{
  templateUrl:"view/update.html",
  controller:"updateCtrl"
})


});

