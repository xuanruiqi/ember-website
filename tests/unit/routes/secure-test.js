import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | secure', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:secure');
    assert.ok(route);
  });
});
