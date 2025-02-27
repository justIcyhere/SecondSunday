var urlApi="http://localhost:3000/sp";
app.controller("spController", function ($scope, $http) {
  $scope.sp = [];
    $http.get(urlApi).then(
      function (response) {
        $scope.sp = response.data;
        console.log($scope.sp);
      },
      function (response) {
        alert("Lỗi load sản phẩm");
      }
    );


    $scope.deleteSP=function(id){
      $http.delete(`${urlApi}/${id}`).then(function(){
          alert("Xóa thành công");
          return document.location="#!sp";
      },function(){
          alert("Xóa không thành công")
      })
   }
  });
  app.controller("addCtrl",function($scope,$http){
     

    $scope.addSP=function(){
        $http.post(urlApi,{
            "img":$scope.img,
            "title":$scope.title,
            "oldprice":$scope.oldprice,
            "price":$scope.price,

           
        }).then(function(){
            alert("Thêm sản phẩm thành công");
            return document.location="#!sp";

        },function(){
            alert("Lỗi thêm sản phẩm")
        })
    }
})



app.controller("updateCtrl", function($scope, $http, $routeParams){
  $scope.up = [];
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

  // update button
  $scope.updateSP = function(){
      $scope.upSP ={
          "img": $scope.up.img,
          "title": $scope.up.title,
          "oldprice": $scope.up.oldprice,
          "price": $scope.up.price
          
      }
      $http.put(`${urlApi}/${$scope.id}`, $scope.upSP).then(
          function(){
              alert("Sửa thành công");
              return document.location = "#!sp";
          }, function(){
              alert("Sửa không thành công");
          }
      )
  }
})