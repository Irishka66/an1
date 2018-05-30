// (function() {
//     "use strict";
//
//     // ngSanitize нужен для демонстрации ng-bind-html
//     angular.module("app", ["ngSanitize", 'ui.router'])
//         .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
//             $urlRouterProvider.otherwise('/');
//             $stateProvider
//                 .state('first', {
//                     url: '/',
//                     templateUrl: 'template/first.html',
//                 })
//                 .state('second', {
//                     url: '/second',
//                     templateUrl: 'template/second.html',
//                 })
//
//         }]);
//
// })();

(function() {
    "use strict";

    // ngSanitize нужен для демонстрации ng-bind-html
    angular.module("app", ["ngSanitize", "ngRoute"])
        .config(function($routeProvider){
        $routeProvider.when('/',
            {
                templateUrl:'templates/first.html',
                // controller:'QuestionController'
            });
        $routeProvider.when('/second',
            {
                templateUrl:'templates/second.html',
                // controller:'AnswerController'
            });
        $routeProvider.otherwise({redirectTo: '/'});

})();

