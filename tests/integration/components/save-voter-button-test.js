import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('save-voter-button', 'Integration | Component | save voter button', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{save-voter-button}}`);

  assert.equal(this.$().text(), '');

  // Template block usage:
  this.render(hbs`
    {{#save-voter-button}}
      template block text
    {{/save-voter-button}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
