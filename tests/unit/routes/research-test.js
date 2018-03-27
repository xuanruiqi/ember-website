import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | research', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:research');
    assert.ok(route);
  });
});
