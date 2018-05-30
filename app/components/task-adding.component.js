(function() {
    "use strict";

    let componentTaskAdding = {
        bindings: {
            myName: '=',
        },
        controller: function (componentTodoService, $http, $scope) {

            this.message = 'this is from component';

            this.add = function(task) {
                componentTodoService.add(task);
                componentTodoService.saveLocalReminders();
                this.clearInput();
                // console.log(this.myName);
                this.message = 'smth ' + task;
                console.log(this.message);
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

            $scope.$watch('message',  function(newValue, oldValue) {
                console.log('this.message is changed: ');
            });


            this.someData = [{name: 'rrr'}, {name: 'hhh'}];

            this.postSmth = () => {
                // $http.post("data/todo.json", this.someData)
                //     .success(function () {
                //         alert('success post');
                //     })
                //     .error(function () {
                //         alert('error post');
                //     });

                $http({
                    method: 'POST',
                    url: 'data/todo.json',
                    data: this.someData,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                })
                .then(function(response) {
                    console.log('success post')
                },
                function(response) { // optional
                    console.log('error post');
                    console.log(response.status);
                });
            };


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

