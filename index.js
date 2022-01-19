var Origin = angular.module("Origin", ["ngRoute"]);

Origin.factory('exampleGlobalObject', () => {
    return {};
});

Origin.config(function ($routeProvider){
    $routeProvider.when("", {
        
    }).otherwise({
        templateUrl: "landing.html",
        controller: "landingController"
    });
});

Origin.controller("MommyController", function ($scope){
    //
});

Origin.controller("landingController", function ($scope){
    //
});