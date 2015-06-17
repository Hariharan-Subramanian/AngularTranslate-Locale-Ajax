(function() {
    'use strict';
    angular.module('myPage')
        .directive('mpInfoTable', function() {
            return {
                restrict: 'A',
                scope:{
                	data:"=",
                	togglePersonalInfo:"="
                },
                templateUrl: 'app/main/infotable.html'
         	};
        })
 })()
