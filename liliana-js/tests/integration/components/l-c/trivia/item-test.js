import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('l-c/trivia/item', 'Integration | Component | l c/trivia/item', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{l-c/trivia/item}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#l-c/trivia/item}}
      template block text
    {{/l-c/trivia/item}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
