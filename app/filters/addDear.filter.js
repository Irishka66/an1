(function() {
    "use strict";

    angular.module("app")
        .filter("addDear", addDear)

    function addDear() {
        return function(mess) {
            return 'Dear ' + mess;
        };
    }

})();