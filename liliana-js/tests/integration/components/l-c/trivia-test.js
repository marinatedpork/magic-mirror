import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('l-c/trivia', 'Integration | Component | l c/trivia', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{l-c/trivia}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#l-c/trivia}}
      template block text
    {{/l-c/trivia}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
