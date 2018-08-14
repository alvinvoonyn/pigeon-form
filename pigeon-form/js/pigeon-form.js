/*global angular, document, console, $, alert, jQuery*/
/*jslint vars: true*/
/*jslint plusplus: true*/

var path = document.currentScript.src.substr(0, document.currentScript.src.lastIndexOf("pigeon-form/"));
var app = angular.module("pigeon-form", []);

app.directive("pigeonForm", function ($parse, $http) {
    "use strict";

    var direc = {};
    direc.restrict = "E";

    direc.scope = {
        query : "@"
    };

    direc.controller = "pigeonForm";

    direc.templateUrl = path + 'pigeon-form/template/outputTemplate.html';

    direc.compile = function () {
        var linkFunction = function (scope, element, attributes) {

            //Initialize the default settings
            scope.init();

        };

        return linkFunction;
    };

    return direc;
});

app.controller("pigeonForm", function ($scope, $http, $uibModal) {
    "use strict";

    //Initialize default settings
    $scope.init = function () {

    };

    $scope.getData = function () {
        $http.post(path + "pigeon-core/get-data-with-crud.php", {sql: $scope.query})
        .then(function (response) {

        });
    };


    //TODO - Insert your function/ code here


});

//Load pigeon-table angular module when pigeon-form tag is found in document.
angular.bootstrap(document.getElementsByTagName("pigeon-form"), ['pigeon-form']);
