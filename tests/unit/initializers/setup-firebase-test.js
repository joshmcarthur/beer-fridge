import Ember from 'ember';
import SetupFirebaseInitializer from 'beer-fridge/initializers/setup-firebase';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | setup firebase', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  SetupFirebaseInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
