angular.module('myApp').controller('productsCtrl',function($scope,$http){
    $http.get('http://design2taste.com/angular/products.php').success(function(response){
        $scope.products = response;
    });

    $scope.showCatalog = 0;

    $scope.toggle = function(){
        $scope.showCatalog = !$scope.showCatalog;
    }
});