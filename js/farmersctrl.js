app.controller("FarmerListCtrl", [
    "$scope","$Session","$DATA",
    function($scope, $Session, $DATA){
        $scope.getFarmers = function(){
            return $DATA.data['farmers'][$Session.user].farmers;
        }
    }
]);

app.controller("SignUpCtrl", [
    "$DATA","$scope","$state",
    function($DATA,$scope,$state){

        angular.extend($scope, {
            "farmer" : {},
            "buyer"  : {},
            "registerFarmer" : function(){
                $DATA.publish("farmers", $scope.farmer);
                $state.transitionTo('start');

            },
            "registerBuyer" : function(){
                console.log('here')
                $DATA.publish("buyers", $scope.buyer);
                $state.transitionTo('start');
            }
        })
    }
]);

app.factory("$Session", [
    function(){
        var session = {
            type: "",
            user: ""
        }
        return session;
    }
]);

app.directive('rbac', [
    "$Session",
    function($Session){
        var rbac = {
            restrict: 'A',
            scope: false,
            link : function(scope,element,attrs){
                console.log(attrs["rbac"]);
                if($Session.type != attrs['rbac'])
                    element.addClass('ng-hide');
            }
        }
        return rbac;
    }
])

app.controller("LoginCtrl", [
    "$DATA","$scope","$Session","$state",
    function($DATA,$scope,$Session,$state){
        $scope.user = {
            phone : "",
            pwd : ""
        }
        $scope.login = function(){
            $scope.success = false;
            for(var i=0;i<$DATA.data['farmers'].length;i++){
                if($DATA.data['farmers'][i].phone == $scope.user.phone && $DATA.data['farmers'][i].password == $scope.user.pwd ){
                    $Session["type"] = "farmers";
                    $Session["user"] = i;
                    $state.transitionTo("app.dashboard");
                    return;
                }
            }
            for(var i=0;i<$DATA.data['buyers'].length;i++){
                if($DATA.data['buyers'][i].phone == $scope.user.phone && $DATA.data['buyers'][i].password == $scope.user.pwd){
                   $Session["type"] = "buyers";
                    $Session["user"] = i;
                    $state.transitionTo("app.market");
                    return;
                }
            }
        }
    }
])
