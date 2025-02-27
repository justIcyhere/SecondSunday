app.controller("spController", function ($scope, $http) {
    $http.get(`http://localhost:3000/sp`).then(
      function (response) {
        $scope.sp = response.data;
        console.log($scope.sp);
      },
      function (response) {
        alert("Lỗi load sản phẩm");
      }
    )
    
    
  }
);
var urlApi="http://localhost:3000/sp";
app.controller("detailCtrl", function($scope, $http, $routeParams){
  $scope.de = [];
  $scope.id = $routeParams.id;
  // lay 1 doi tuong
  $http.get(`${urlApi}/${$scope.id}`).then(
      function(res){
          console.log(res.data);
          $scope.up = res.data;
      }, function(){
          alert("Không lấy được data");
      }
  )
})
