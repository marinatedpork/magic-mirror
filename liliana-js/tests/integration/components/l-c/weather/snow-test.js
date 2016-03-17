import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('l-c/weather/snow', 'Integration | Component | l c/weather/snow', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{l-c/weather/snow}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#l-c/weather/snow}}
      template block text
    {{/l-c/weather/snow}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
