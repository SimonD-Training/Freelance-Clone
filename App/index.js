var Origin = angular.module("Origin", ["ngRoute"]);

Origin.factory('Global', () => {
    return {
        title: ""
    };
});

Origin.config(function ($routeProvider){
    $routeProvider.when("", {
        
    }).otherwise({
        templateUrl: "./Landing/landing.html",
        controller: "landingController"
    });
});

Origin.controller("MommyController", function ($scope, Global){
    $scope.global = Global;
});

Origin.controller("landingController", function ($scope, $interval, Global){
    $scope.global = Global;
    Global.title = "Hire Freelancers & Find Freelance Jobs Online | Freelancer";
    $scope.catalogue = [ //{url: "", title1: "", title2: ""}
    {url: "./Media/logo-design-v2.jpg", title1: "Logo Design.", title2: "$30 USD in 1 day."},
    {url: "./Media/package-design-1-v2.jpg", title1: "Package Design.", title2: "$280 USD in 4 days."},
    {url: "./Media/mobile-design-1-v2.jpg", title1: "Mobile Design.", title2: "$600 USD in 4 days."},
    {url: "./Media/wordpress-1.jpg", title1: "Wordpess.", title2: "$45 USD in 1 day."},
    {url: "./Media/logo-design-2.jpg", title1: "Logo Design.", title2: "$30 USD in 1 day."},
    {url: "./Media/website-1.jpg", title1: "Website.", title2: "$150 USD in 1 day."},
    {url: "./Media/website-design-1.jpg", title1: "Website Design.", title2: "$140 USD in 13 day."},
    {url: "./Media/illustration-v2.jpg", title1: "Illustration.", title2: "$10 USD in 3 day."},
    {url: "./Media/wordpress-2.jpg", title1: "Wordpess.", title2: "$150 USD in 18 day."},
    {url: "./Media/package-design-4.jpg", title1: "Package Design.", title2: "$100 USD in 6 day."},
    {url: "./Media/mobile-design-2-v2.jpg", title1: "Mobile Design.", title2: "$100 USD in 1 day."},
    {url: "./Media/package-design-3.jpg", title1: "Package Design.", title2: "$155 USD in 2 day."},
    {url: "./Media/website-2.jpg", title1: "Website.", title2: "$200 USD in 9 day."},
    {url: "./Media/3d-modeling.jpg", title1: "3D Modeling.", title2: "$110 USD in 28 day."},
    {url: "./Media/logo-design-3.jpg", title1: "Logo Design.", title2: "$20 USD in 3 day."},
    {url: "./Media/graphic-design-2.jpg", title1: "Graphic Design.", title2: "$60 USD in 10 day."}
    ];
    $scope.display = [ //{url: "", title: ""}
        {url: "./Media/nasa-1080.jpg", title: "This radiation shield for NASA cost $500 USD and took 15 days"},
        {url: "./Media/house-1080.jpg", title: "This architectural design cost $500 USD and took 15 days"},
        {url: "./Media/magazine-1080.jpg", title: "This illustration cost $100 USD and took 5 days"},
        {url: "./Media/mobile-phone-1080.jpg", title: "This mobile app design cost $1500 USd and took 20 days"}
    ];
    $scope.displayIx = 0;
    $interval( () => {
        $scope.displayIx++;
        $scope.displayIx%=4;
    }, 5000);
    $scope.displayStyle = () => {
        return {background: 'url('+$scope.display[$scope.displayIx].url+')', 'background-size': 'cover', 'background-position': 'center', 'background-repeat': 'no-repeat', 'transition': 'background 1s linear'};
    };
});