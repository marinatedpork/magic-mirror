import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('l-c/weather/rain', 'Integration | Component | l c/weather/rain', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{l-c/weather/rain}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#l-c/weather/rain}}
      template block text
    {{/l-c/weather/rain}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
