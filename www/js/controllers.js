angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
  $scope.transfers = [
    { name: 'Karin', amount: '20,00 €', date: '30.11.' },
    { name: 'Satu', amount: '50,00 €', date: '29.11.' }    
  ];
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
