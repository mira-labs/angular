angular.module('myApp').controller('politicsCtrl',function($scope){
    $scope.politicians = [
        {name:"David",surname:"Cameron",salary:"120000"},
        {name:"Nigel",surname:"Farage",salary:"66000"},
        {name:"Boris",surname:"Johnson",salary:"145000"}
    ];

    $scope.fullData = function(politician){
        return politician.name +' '+politician.surname;
    }
});