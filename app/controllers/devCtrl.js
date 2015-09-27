angular.module('myApp').controller('devCtrl',function ($scope) {
    $scope.people = [
        {name: "Rad", surname: "Zajaczkowski",projects:['britvic','starbucks','vodafone']},
        {name: "Hai Sam", surname: "Hoang",projects:['brocklebankpenn','d2t','facebook']}
    ];
    $scope.developer = {name: "Rad", surname: "Zajaczkowski", "age": "37"};

    $scope.otherDevelopers = [{name:"Mike",age:"36"},{name:"Yee",age:"37"}];
    $scope.fullDeveloper = function(){
        return $scope.developer.name + ' '+$scope.developer.surname + ' : ' +$scope.developer.age;
    }

    //$scope.

});