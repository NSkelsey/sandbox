angular.module('sandboxMod', 
  ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    controller: 'submissionCtrl',
    templateUrl: 'work.html',
    resolve: {
      initialData: ['SubmissionInitData', function(SubmissionInitData) {
        return SubmissionInitData();
      }],
      otherData: function() { return 234; },
    },
  });
  console.log('config mod');

}])
.run(['$rootScope', function($rootScope) {
  $rootScope.$watch('$routeChangeError', function(e) {
    console.log('route change error', e);
  });
}])
.factory('SubmissionInitData', ['$q', 'SubmissionFactory', function($q, SubmissionFactory) {

  return function() {
    console.log('init data');
  
    d1 = $q.when(function() { return 'Allo greg'; });

    submission = SubmissionFactory;

    return $q.all([d1.promise, submission.doHardWork()]).then(function(results) {
      return {
        greeting: results[0],
        salute: 'Hello sir!',
        doneWork: results[1],
      };
    });
  };
}])
.service('SubmissionFactory', ['$q', '$timeout', function($q, $timeout) {

  var self = this;
  this.id = 'xxx-xxx-xxx-xxx';
  console.log('ran sub factory', this);
  
  this.doHardWork = function() {
    var d1 = $q.defer();
    $timeout(function(){
      self.meaning = 42;
      d1.resolve(self);
    }, 2000);
    return d1.promise;
  };

}])
.controller('mainCtrl', [function() {
  console.log('ran mainCtrl');
  $scope.name = 'main';

}])
.controller('submissionCtrl', ['$scope', function($scope) {
  console.log('ran subCtrl');
  $scope.name = 'subCtrl';
  console.log($scope.$resolve);
}]);
