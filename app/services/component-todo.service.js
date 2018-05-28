/**
 * Logger Factory
 * @namespace Factories
 */
(function () {
    "use strict";

    angular.module("app")
        .factory("componentTodoService", componentTodoService);

    /**
     * @namespace todoService
     * @desc Todo Service
     * @memberOf Factories
     */

    function componentTodoService() {

        // It's working even with the follows
        // let arrTasks = JSON.parse(localStorage.getItem('reminders_from_components'));

        let arrTasks  = [];
        if (JSON.parse(localStorage.getItem('reminders_from_components')) !== null) {
            arrTasks = JSON.parse(localStorage.getItem('reminders_from_components'));
        }

        function add(task) {
            arrTasks.push(task);
            console.log(arrTasks);
        }

        function del(index) {
            arrTasks.splice(index, 1);
            console.log(arrTasks);
        }

        function saveLocalReminders() {
            let localReminders = JSON.stringify(this.arrTasks);
            localStorage.setItem('reminders_from_components', localReminders);
        }

        return {
            arrTasks,
            add,
            del,
            saveLocalReminders
        }
    }


})();