(function() {
    "use strict";

    angular.module("app")
        .controller("TodoController", TodoController);

    // Should I use the following??? It's working right now!
    // TodoController.$inject = ['todoService'];

    function TodoController(todoService, ) {   //$router

        let vm = this;
        vm.myName = 'Irina';
        vm.arrTasks = todoService.arrTasks;

        vm.add = function(task) {
            todoService.add(task);
            todoService.saveLocalReminders();
            vm.clearInput();
        };

        vm.del = function(index) {
            todoService.del(index);
            todoService.saveLocalReminders();
        };

        vm.clearInput = function() {
            vm.addedTask = '';
        }

        // $router.config([
        //     {
        //         path: '/',
        //         component: 'start'
        //     },
        //     {
        //         path: '/finish',
        //         component: 'finish'
        //     },
        // ]);
    }

})();