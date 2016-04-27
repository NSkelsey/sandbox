angular.module('localizationTestMod', 
  [
    'tmh.dynamicLocale',
    'ui.bootstrap',
])
.config(['tmhDynamicLocaleProvider', function(tmhDynamicLocaleProvider) {
  tmhDynamicLocaleProvider.localeLocationPattern('/components/angular-i18n/angular-locale_{{locale}}.js');
}])
.controller('MainCtrl', ['$scope', '$locale', 'tmhDynamicLocale', function($scope, $locale, tmhDynamicLocale) {
  $scope.current_date = new Date();

  tmhDynamicLocale.set('fr'); 

  $scope.spot = $locale;
  $scope.popup = {
    open : false,
  };


  $scope.availableLocales = {
    'en': 'English',
    'de': 'German',
    'fr': 'French',
    'ar': 'Arabic',
    'ja': 'Japanese',
    'ko': 'Korean',
    'zh': 'Chinese'
  };

  $scope.model = {selectedLocale: 'fr'};
  $scope.$locale = $locale;
  $scope.changeLocale = tmhDynamicLocale.set;

}]);
