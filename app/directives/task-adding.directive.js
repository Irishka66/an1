(function() {
    "use strict";

    angular.module("app")
        .directive("viTaskAdding", viTaskAdding);

    function viTaskAdding() {
        let directive = {
            restrict: "EA",
            templateUrl: "templates/task-adding.html"
        };

        return directive;
    }
})();