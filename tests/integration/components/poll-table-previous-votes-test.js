import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('poll-table-previous-votes', 'Integration | Component | poll table previous votes', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{poll-table-previous-votes}}`);

  assert.equal(this.$().text(), '');

  // Template block usage:
  this.render(hbs`
    {{#poll-table-previous-votes}}
      template block text
    {{/poll-table-previous-votes}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
