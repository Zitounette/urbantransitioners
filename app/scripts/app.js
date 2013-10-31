'use strict';

angular.module('urban', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/about', {
        templateUrl: 'views/about.html'
      })
      .when('/blog', {
        templateUrl: 'views/blog.html'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html'
      })
      .when('/links', {
        templateUrl: 'views/links.html'
      })
      .when('/team', {
        templateUrl: 'views/team.html'
      })
      .when('/projects', {
        templateUrl: 'views/projects.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
