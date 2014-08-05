'use strict';

/**
 * @ngdoc function
 * @name blogPersonalApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the blogPersonalApp
 */
angular.module('blogPersonalApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
