import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('sp-funnel-composed', 'Integration | Component | sp funnel composed', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{sp-funnel-composed}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#sp-funnel-composed}}
      template block text
    {{/sp-funnel-composed}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
