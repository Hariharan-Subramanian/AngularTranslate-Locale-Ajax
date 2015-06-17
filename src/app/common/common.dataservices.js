(function() {
    'use strict';

    angular
        .module('translateLocale')
        .service('commonDataService', commonDataService)
        .factory('localeLoader', localeLoader);

    function commonDataService($http) {
        this.getMainData = function() {
            return $http.get('./data/main.json');
        };
    }

    function localeLoader($q, $timeout, $http) {
        return function(options) {
            var deferred = $q.defer(),
                translations;
            console.log(options.key)

            $http.get('./locale/locale-' + options.key + '.json').success(function(data) {
                translations = data;

            });

            $timeout(function() {
                deferred.resolve(translations);
            }, 100);

            return deferred.promise;
        };
    }

    commonDataService.$inject = ['$http'];

})();
