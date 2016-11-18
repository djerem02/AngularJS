/**
 * Created by Jérémy on 18/11/2016.
 */




(function() {

    angular
        .module("appName", [])
        .controller("MonControl", MonControl);

    MonControl.$inject = ["$scope"];

    function MonControl($scope) {
        $scope.maVariable="Hello World !";
    }

})();
