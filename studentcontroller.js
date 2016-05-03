(function () {
    'use strict';

    var app = angular.module('app', []);

    app.controller('studentCtrl', controller);

    controller.$inject = ['$scope', '$http'];

    function controller($scope, $http) {
        activate();
        function activate() {
            $http.get("students.json").then(function(res) {
                console.log(res.data);
                $scope.students = res.data;
            });

        }
    }
})();
