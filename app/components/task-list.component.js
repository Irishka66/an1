(function() {
    "use strict";

    let componentTaskList = {
        bindings: {
            // myName: '<',
        },
        controller: function (componentTodoService, $scope) {

            this.arrTasks = componentTodoService.arrTasks;

            this.del = function(index) {
                componentTodoService.del(index);
                componentTodoService.saveLocalReminders();
            };

        },
        templateUrl: "templates/component-task-list.html",
    };

    angular.module("app")
        .component("componentTaskList", componentTaskList);
})();