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
                console.log(this.parentCtrl.message);
            };
        },
        templateUrl: "templates/child.html",
    };

    angular.module("app")
        .component("child", child);
})();

