(function() {
    'use strict';
    angular.module('translateLocale')
        .directive('localeTable', ['$timeout', '$translate', function($timeout, $translate) {
            return {
                restrict: 'A',

                scope: {
                    data: '=',
                    titleTable: '=',                  
                    link: '=?', 
                    togglePersonalInfo:'=?',                 
                    selectSection: '=?',
                    callbackFn: '&'

                },
                templateUrl: 'app/home/tableTemplate.html',
                controllerAs: 'vm',
                controller: TableCtrl

            };
        }]);
    function TableCtrl($scope, $translate) {
        var vm = this;
        $scope.changeLocale = changeLocale;
           vm.notSorted = function(obj) {
            if (!obj) {
                return [];
            }
            return Object.keys(obj);
        }

        function changeLocale(item) {
            console.log(item)
            if ($translate.use() !== item) {
                $translate.use(item);
                $scope.callbackFn(item);
            }
        }
    }
})();
