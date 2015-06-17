(function() {

    'use strict';

    angular.module('myPage')
        .controller('PaycheckCtrl', PaycheckCtrl);

    PaycheckCtrl.$inject = ['$scope', '$translate'];

    function PaybackCtrl($scope, $translate) {
        var vm = this;
        vm.showPersonalInfo = false;
        vm.changeLocale = changeLocale;

        function changeLocale() {
            if ($translate.use() === 'en_US') {
                $translate.use('de_DE');
            } else {
                $translate.use('en_US');
            }
        };
    }


})();

