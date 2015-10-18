var app = angular.module('efarm', [
        'ionic'
])

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

   .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
  .state('app.dashboard', {
      url: '/dashboard',
      views: {
          'menuContent': {
              templateUrl: 'templates/dashboard.html'
          }
      }
  })
  .state('app.reg-farmers', {
      url: '/reg-farmer',
      views: {
          'menuContent': {
              templateUrl: 'templates/register-farmer.html'
          }
      }
  })
  .state('app.farmers', {
      url: '/farmers',
      views: {
          'menuContent': {
              templateUrl: 'templates/farmers.html',
              controller: "FarmerListCtrl"
          }
      }
  })
  .state('app.contracts', {
      url: '/contracts',
      views: {
          'menuContent': {
              templateUrl: 'templates/contracts.html'
          }
      }
  })
  .state('app.reg-buyers', {
      url: '/register-buyer',
      views: {
          'menuContent': {
              templateUrl: 'templates/register-buyer.html'
          }
      }
  })
  .state('start', {
      url: '/start',
      templateUrl: 'templates/start.html',
      controller:'LoginCtrl'
  })
  .state('signup', {
      url: '/signup',
      templateUrl: 'templates/sign-up.html',
      controller:"SignUpCtrl"
  })
  .state('app.add-harvest', {
      url: '/add-harvest',
      views: {
          'menuContent': {
              templateUrl: 'templates/add-harvest.html'
          }
      }
  })
  .state('app.market', {
      url: '/market',
      views: {
          'menuContent': {
              templateUrl: 'templates/market.html'
          }
      }
  })
  .state('app.contract-group', {
      url: '/contract-group',
      views: {
          'menuContent': {
              templateUrl: 'templates/contract-group.html'
          }
      }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/start');
});
