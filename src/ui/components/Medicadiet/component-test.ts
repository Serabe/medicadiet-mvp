import hbs from '@glimmer/inline-precompile';
import { setupRenderingTest } from '@glimmer/test-helpers';

const { module, test } = QUnit;

module('Component: Medicadiet', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await this.render(hbs`<Medicadiet />`);
    assert.equal(this.containerElement.textContent, 'Welcome to Glimmer!\n');
  });
});
