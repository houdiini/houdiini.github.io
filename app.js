(function(){
  'use strict';

  angular.module('mail', ['ui.router', 'ngAnimate'])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('dashboard', {
      url: '/',
      templateUrl: 'views/dashboard.html',
      controller: 'mainCtrl'
    })
    .state('dashboard.components', {
      views: {
        'sidebar': {
          templateUrl: 'views/sidebar.html',
          controller: 'sidebarCtrl'
        },
        'messages': {
          templateUrl: 'views/messages.html',
          controller: 'messagesCtrl'
        },
        'message': {
          templateUrl: 'views/message.html',
          controller: 'messageCtrl'
        },
        'header': {
          templateUrl: 'views/header.html'
        }
      }
    });
  })
})()
