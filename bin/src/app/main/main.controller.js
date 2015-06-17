(function() {

    'use strict';

    angular.module('myPage')
        .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['$scope', '$translate'];

    function MainCtrl($scope, $translate) {
        var vm = this;
        vm.showPersonalInfo = false;
        vm.togglePersonalInfo = togglePersonalInfo;
        vm.changeLocale = changeLocale;

        vm.summaryData = {
            "title": "My Summary",
            "data": {
                "current Paycheck": "$100.00",
                "Vacation": "181.42 hours",
                "ESPP Deduction": "7%"
            }
        };
        vm.infoData = {
            "title": "My Info",
            "data": {
                "Employee Number": "237043",
                "Annual Salary": "$122,148",
                "Job Level Individual": "4",
                "Date of Hire": "Apr 15, 2013",
                "Div./Dept.": "0056/0739",
                "JHR Contact": "hrhelpline@apple.com",
                "Payroll Contact": "notify_uat@mailtest.apple.com"
            }
        };
        vm.timeAwayData = {
            "title": "Time Away In Box",
            "data": {
                "Pending Requests": "0",
                "Recently Approved Requests": "6",
                "Returned Requests": "0"

            }
        };
        vm.currentEsppData = {
            "title": "Current ESPP",
            "data": {
                "Period Number": "69",
                "Period Beginning Date": "Apr 1, 2015 ",
                "Period Ending Date": "Aug 31, 2015 ",
                "Period Beginning Value": "96.13 (USD)"
            }
        };

        ////////////

        function togglePersonalInfo() {
            vm.showPersonalInfo = !vm.showPersonalInfo;
        }

        function changeLocale() {
            if ($translate.use() === 'en_US') {
                $translate.use('de_DE');
            } else {
                $translate.use('en_US');
            }
        };
    }


})();
