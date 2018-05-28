/**
 * Logger Factory
 * @namespace Factories
 */
(function () {
    "use strict";

    angular.module("app")
        .factory("todoService", todoService);

    /**
  * @namespace todoService
  * @desc Todo Service
  * @memberOf Factories
  */

    function todoService() {

        let arrTasks = JSON.parse(localStorage.getItem('reminders'));
        // let arrTasks = [];

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
            localStorage.setItem('reminders', localReminders);
        }

        return {
            arrTasks,
            add,
            del,
            saveLocalReminders,
        }
    }


})();