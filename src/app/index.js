(function() {
    'use strict';
    angular.module('translateLocale', ['ngResource', 'ui.router', 'ui.bootstrap', 'ui.bootstrap.popover', 'pascalprecht.translate'])
        .config(['$translateProvider', function($translateProvider) {
            $translateProvider.preferredLanguage('en_EN');
            $translateProvider.useLoader('localeLoader');
        }]);
})();
