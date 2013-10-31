'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('urban'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('mainCtrl', {
      $scope: scope
    });
  }));

  it('should have language property', function () {
    expect(scope.main.lang).toBeDefined();
  });
});
