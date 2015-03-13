var ben = angular.module("ben", ["ui.router"]);

ben.config(function($stateProvider) {
  $stateProvider.state("home", {
    url: "",
    templateUrl: "partials/home.html"
  });
});
