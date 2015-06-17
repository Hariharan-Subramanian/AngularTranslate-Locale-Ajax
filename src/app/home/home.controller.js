(function() {

    'use strict';

    angular.module('translateLocale')
        .controller('MainCtrl', MainCtrl)
        
    function MainCtrl($scope, $translate, homeService) {
        var vm = this;
        var mainData = {};
        vm.changelanguage = changelanguage;
        vm.selectsection = false;

        init();

        ////////////////////////////////////////

        function init() {
            homeService.getMainAllData().then(function(data) {
                mainData = homeService.data.data;
                vm.tableData1 = mainData.data.tableData1;
                vm.tableData2 = mainData.data.tableData2;
                vm.tableData3 = mainData.data.tableData3;
                vm.tableData4 = mainData.data.tableData4;
                vm.tableData5 = mainData.data.tableData5;           
            });
        }

        function changelanguage() {
           init();
        }
    }
    MainCtrl.$inject = ['$scope', '$translate', 'homeService','localeLoader'];
})();
