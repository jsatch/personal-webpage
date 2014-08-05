'use strict';

/**
 * @ngdoc overview
 * @name blogPersonalApp
 * @description
 * # blogPersonalApp
 *
 * Main module of the application.
 */
angular
  .module('blogPersonalApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/blog', {
        templateUrl: 'views/blog.html',
        controller: 'AboutCtrl'
      });
      /*.when('/about', {
        redirectTo: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });*/
  });
