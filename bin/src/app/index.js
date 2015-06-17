'use strict';

angular.module('myPage', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap', 'pascalprecht.translate'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: 'MainCtrl'
            })
            .state('currentPaycheck', {
                url: '/currentPaycheck',
                templateUrl: 'app/mymoney/currentpaycheck/currentPaycheck.html',
                controller: 'PaycheckCtrl'
            });
            

        $urlRouterProvider.otherwise('/');
    }).config(function($translateProvider) {

        $translateProvider.useStaticFilesLoader({
            prefix: '../locale/locale-',
            suffix: '.json'
        });
        $translateProvider.use('de_DE');
    });
