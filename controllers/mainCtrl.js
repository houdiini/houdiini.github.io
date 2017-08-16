angular.module('mail').controller('mainCtrl', mainCtrl);

mainCtrl.$inject = ['$scope', '$state', '$http'];
function mainCtrl($scope, $state, $http) {
  $state.go('dashboard.components');
  $scope.user = {
    name: 'Artem Ivashkevich',
    mail: 'houdiini@gmail.com'
  }
  $scope.messages = [];
  $scope.draft = [];
  $scope.deleted = [];
  $scope.option = {
    select: 0,
    activeMessage: {},
    showMobileMenu: true
  }

  $http.get('messages.json')
  .then(function(res) {
    $scope.messages = res.data.messages;
  });

  $http.get('draft.json')
  .then(function(res) {
    $scope.draft = res.data.messages;
  });

  $http.get('deleted.json')
  .then(function(res) {
    $scope.deleted = res.data.messages;
  });

  $scope.headerTitle = function(id) {
    switch (id) {
      case 0: return 'Profile';
      case 1: return 'Work experience';
      case 2: return 'Tagged';
      case 3: return 'Sent message';
      case 4: return 'Spam';
      case 5: return 'Deleted messages';
      case 6: return 'Work';
      case 7: return 'Personal';
      case 8: return 'Manage folders';
      case 9: return 'Contacts';
      case 10: return 'Settings';
    }
  }

}
