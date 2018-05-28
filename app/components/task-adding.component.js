(function() {
    "use strict";

    let componentTaskAdding = {
        bindings: {
            myName: '=',
        },
        controller: function (componentTodoService, $http) {

            this.message = 'this is from component';

            this.add = function(task) {
                componentTodoService.add(task);
                componentTodoService.saveLocalReminders();
                this.clearInput();
                // console.log(this.myName);
            };

            this.clearInput = function() {
                this.addedTask = '';
            };

            this.getSmth = function() {
                $http.get("data/todo.json")
                    .then((response) => {
                        this.data = response.data;
                    })
                    .catch(() => $q.reject("Error"));
            };

            // this.someData = [{name: 'rrr'}, {name: 'hhh'}]
            // this.postSmth = function() {
            //     $http.post("data/todo.json", this.someData)
            //         .success(function () {
            //             alert('success post');
            //         })
            //         .error(function () {
            //             alert('error post');
            //         });
            // };
            // this.putSmth = function() {
            //
            // };
            // this.deleteSmth = function() {
            //
            // };

        },
        templateUrl: "templates/component-task-adding.html",
    };

    angular.module("app")
        .component("componentTaskAdding", componentTaskAdding);
})();

