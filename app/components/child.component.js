(function() {
    "use strict";

    let child = {
        bindings: {
            message: '='
        },
        require: {
            parentCtrl: '^componentTaskAdding',
        },
        controller: function () {
            this.$onInit = function () {
                console.log('this message in child from parent: ' + this.parentCtrl.message);
            };
        },
        templateUrl: "templates/child.html",
    };

    angular.module("app")
        .component("child", child);
})();

