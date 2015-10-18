app.controller('AppCtrl', function($scope, $state) {
    $scope.logout = function(){
        $state.transitionTo('start');
    }
})

app.controller('PlaylistsCtrl', function($scope) {

})

app.controller('PlaylistCtrl', function($scope, $stateParams) {

});
