// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('welcome', {
    url: '/welcome',
    templateUrl: 'templates/welcome.html'
    //abstract: true,
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginController'
  })
  .state('panda_transaction', {
    url: '/panda_transaction',
    templateUrl: 'templates/panda_transaction.html',
    controller: 'transactionController'
  })

  .state('transaction', {
    url: '/transaction',
    templateUrl: 'templates/transaction.html',
  })

  .state('create_transaction', {
    url: '/create_transaction',
    templateUrl: 'templates/create_transaction.html',
    controller: 'createController'
  })

  .state('view_transaction', {
    url: '/view_transaction',
    templateUrl: 'templates/view_transaction.html',
    //controller: 'transactionController'
  })

  .state('logout', {
    url: '/logout',
    templateUrl: 'templates/logout.html',
    controller: 'logoutController'
  })




  
  $urlRouterProvider.otherwise('welcome');

});
