//TODO DO IT IN MODULE LEVEL(NOT IN APPLICATION LEVEL)
(function() {
    'use strict';

    angular.module('translateLocale')
        .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'app/home/home.html',
                    controller: 'MainCtrl'
                });               
                $urlRouterProvider.otherwise('/');
        });

})();
