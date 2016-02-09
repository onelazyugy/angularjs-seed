var app = angular.module('pg-dashboard', [
    'pg-dashboard.controllers',
    'pg-dashboard.services',
    'pg-dashboard.directives',
    'pg-dashboard.filters',
    'ui.router',
    'ui.bootstrap',
    'chart.js',
    'ngPrettyJson'
]).config(function($urlRouterProvider, $stateProvider) {
    'use strict';  
    $urlRouterProvider.when("/", "/auth/main");
    $urlRouterProvider.otherwise("/");
    
    $stateProvider
    .state("auth", {
        url: "/auth",
        abstract: true,
        templateUrl: "app/view/auth/auth.html",
        controller: "authCtrl"
    }).state("auth.main", {
        url: "/main",
        templateUrl: "app/view/auth/main/auth_main.html",
        controller: "authMainCtrl"
    }).state("auth.client", {
        url: "/:clientId",
        templateUrl: "app/view/auth/clients/client.html",
        controller: "authClientCtrl"
    }).state("ptm", {
        url: "/ptm",
        abstract: true,
        templateUrl: "app/view/ptm/ptm.html",
        controller: "ptmCtrl"
    }).state("ptm.main", {
        url: "/main",
        templateUrl: "app/view/ptm/main/ptm_main.html",
        controller: "ptmMainCtrl"
    }).state("reversal", {
        url: "/reversal",
        abstract: true,
        templateUrl: "app/view/reversal/reversal.html",
        controller: "reversalCtrl"
    }).state("reversal.main", {
        url: "/main",
        templateUrl: "app/view/reversal/main/reversal_main.html",
        controller: "reversalMainCtrl"
    }).state('ci', {
      url: '/ci',
      templateUrl: 'app/view/build-services/home/home.html',
      controller: 'ciCtrl'
    }).state('app-statuses', {
      url: '/app-statuses',
      templateUrl: 'app/view/build-services/status/status.html',
      controller: 'appStatusCtrl'
    });
});

var controllers = angular.module('pg-dashboard.controllers', []);
var services = angular.module('pg-dashboard.services', []);
var directives = angular.module('pg-dashboard.directives', []);
var filters = angular.module('pg-dashboard.filters', []);

controllers.controller('MainCtrl', ['$scope', '$state', '$rootScope',
    function($scope, $state, $rootScope) {
        $scope.test = function(){
            alert();
        };
    }
]);