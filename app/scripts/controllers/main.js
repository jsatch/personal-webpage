'use strict';

/**
 * @ngdoc function
 * @name blogPersonalApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the blogPersonalApp
 */
angular.module('blogPersonalApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
