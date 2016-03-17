import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['weather-object'],
  tagName: 'canvas',
  textures: ['http://i.imgur.com/l61uAwY.png', 'http://i.imgur.com/KGCmL1Y.png', 'http://i.imgur.com/YjCOlzJ.png'],

  didRender() {
    let loader = PIXI.loader;
    let [cloudOne, cloudTwo, cloudThree] = this.get('textures');
    loader.add(cloudOne);
    loader.add(cloudTwo);
    loader.add(cloudThree);
    loader.once('complete', this.animate.bind(this));
    loader.load();
  },

  animate() {

    let [cloudOne, cloudTwo, cloudThree] = this.get('textures');
    const WIDTH = $(window).width();
    const HEIGHT = $(window).height();
    let view = this.$().get(0);
    let transparent = true;

    let stage = new PIXI.Container({
      width: WIDTH,
      height: HEIGHT
    });

    let renderer = PIXI.autoDetectRenderer(
      WIDTH,
      HEIGHT,
      { transparent, view }
    );

    let farTexture = PIXI.Texture.fromImage(cloudOne);
    let far = new PIXI.extras.TilingSprite(farTexture, WIDTH, farTexture.height);
    far.position.x = 0;
    far.position.y = HEIGHT / 8;
    far.tilePosition.x = 0;
    far.tilePosition.y = 0;
    far.alpha = .5;
    stage.addChild(far);

    let midTexture = PIXI.Texture.fromImage(cloudTwo);
    let mid = new PIXI.extras.TilingSprite(midTexture, WIDTH, midTexture.height);
    mid.position.x = 0;
    mid.position.y = 0;
    mid.tilePosition.x = 0;
    mid.tilePosition.y = 0;
    mid.alpha = .5;
    stage.addChild(mid);

    let frontTexture = PIXI.Texture.fromImage(cloudThree);
    let front = new PIXI.extras.TilingSprite(frontTexture, WIDTH, frontTexture.height);
    front.position.x = 0;
    front.position.y = 0;
    front.tilePosition.x = 0;
    front.tilePosition.y = 0;
    front.alpha = .5;
    stage.addChild(front);

    this.setProperties({
      stage,
      renderer,
      farTexture,
      far,
      frontTexture,
      front,
      midTexture,
      mid
    });

    requestAnimationFrame(this.update.bind(this));
  },

  update() {
    let { far, mid, front, renderer, stage } = this.getProperties('far', 'mid', 'front', 'renderer', 'stage');
    this.set('far.tilePosition.x', far.tilePosition.x - 0.2);
    this.set('mid.tilePosition.x', mid.tilePosition.x - 0.6);
    this.set('front.tilePosition.x', front.tilePosition.x - 0.4);
    renderer.render(stage);
    requestAnimationFrame(this.update.bind(this));
  }

});
