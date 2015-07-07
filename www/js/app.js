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
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
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
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-home.html',
        controller: 'HomeCtrl'
      }
    }
  })

  .state('tab.pre-assessment', {
      url: '/pre-assessment',
      views: {
        'tab-pre-assessment': {
          templateUrl: 'templates/tab-pre-assessment.html',
          controller: 'Pre-AssessmentCtrl'
        }
      }
    })

  .state('tab.new-data-sheet', {
      url: '/new-data-sheet',
      views: {
        'tab-new-data-sheet': {
          templateUrl: 'templates/tab-new-data-sheet.html',
          controller: 'New-Data-SheetCtrl'
        }
      }
    })

  .state('tab.saved-data-sheets', {
      url: '/saved-data-sheets',
      views: {
        'tab-saved-data-sheets': {
          templateUrl: 'templates/tab-saved-data-sheets.html',
          controller: 'Saved-Data-SheetsCtrl'
        }
      }
    })

  .state('tab.child-progress', {
    url: '/child-progress',
    views: {
      'tab-child-progress': {
        templateUrl: 'templates/tab-child-progress.html',
        controller: 'Child-ProgressCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

});