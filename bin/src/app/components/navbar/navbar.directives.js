(function() {
    'use strict';
    angular.module('myPage')
        .directive('mpFooter', function() {
            return {
                restrict: 'E',
                templateUrl: 'app/components/navbar/footer.html'
            };
        })
        .directive('mpHeader', function(){
            // Runs during compile
            return {
                restrict: 'E', 
                templateUrl: 'app/components/navbar/header.html',
            };
        });


})()
