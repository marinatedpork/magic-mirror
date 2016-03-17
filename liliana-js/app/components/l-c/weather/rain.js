import Ember from 'ember';

const CLOUD = 'http://i.imgur.com/UMkKyxd.png';
const CLOUD_TWO = 'http://i.imgur.com/MqJKcN8.png';
const CLOUD_THREE = 'http://i.imgur.com/FArJaZE.png';

export default Ember.Component.extend({
  classNames: ['weather-object'],
  tagName:'canvas',

  didRender() {
    const color = 0x6E85B1;
    const alpha = 0.6;
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

    let backgroundDensity = 25;
    let background = [];
    
    let midDensity = 5;
    let midground = [];

    let foregroundDensity = 10;
    let foreground = [];

    let filter = new PIXI.filters.DropShadowFilter();
    filter.blur = 10;
    filter.blurY = 20;
    filter.alpha = 0.4;
    let self = this;
    // const WIDTH = $(window).width();
    let loader = PIXI.loader;
    loader.add(CLOUD);
    loader.add(CLOUD_TWO);
    loader.add(CLOUD_THREE);
    loader.once('complete', function(){
      let farTexture = PIXI.Texture.fromImage(CLOUD);
      let far = new PIXI.extras.TilingSprite(farTexture, WIDTH, farTexture.height);
      far.position.x = 0;
      far.position.y = 50;
      far.tilePosition.x = 0;
      far.tilePosition.y = 0;
      far.scale.y = .8;
      far.alpha = .4;
      far.tint = 0xA5A3A2;
      far.filters = [filter];
      stage.addChild(far);
      self.set('far', far);

      let midTexture = PIXI.Texture.fromImage(CLOUD_THREE);
      let mid = new PIXI.extras.TilingSprite(midTexture, WIDTH, midTexture.height);
      mid.position.x = 0;
      mid.position.y = 25;
      mid.tilePosition.x = 0;
      mid.tilePosition.y = 0;
      mid.scale.y = .8;
      mid.alpha = .6;
      mid.tint = 0x736F6E;
      mid.filters = [filter];
      stage.addChild(mid);
      self.set('mid', mid);

      for (var i = 0; i <= backgroundDensity; i++) {
        for (var n = 0; n <= backgroundDensity; n++) {
          let drop = new PIXI.Graphics();
          drop.position.x = (WIDTH / backgroundDensity) * (i + Math.random());
          drop.position.y = (HEIGHT / backgroundDensity) * (n + Math.random());
          drop.beginFill(color, 0.3);
          drop.drawEllipse(0,0, 1, 2);
          drop.endFill();
          background.push(drop);
          stage.addChild(drop);
        }
      }
  
      for (var z = 0; z <= foregroundDensity; z++) {
        for (var x = 0; x <= foregroundDensity; x++) {
          let drop = new PIXI.Graphics();
          drop.position.x = (WIDTH / foregroundDensity) * (z + Math.random());
          drop.position.y = (HEIGHT / foregroundDensity) * (x + Math.random());
          drop.beginFill(color, 0.4);
          drop.drawEllipse(0,0, 2, 3);
          drop.endFill();
          foreground.push(drop);
          stage.addChild(drop);
        }
      }

      for (var t = 0; t <= midDensity; t++) {
        for (var y = 0; y <= midDensity; y++) {
          let drop = new PIXI.Graphics();
          drop.position.x = (WIDTH / midDensity) * (t + Math.random());
          drop.position.y = (HEIGHT / midDensity) * (y + Math.random());
          drop.beginFill(color, 0.7);
          drop.drawEllipse(0,0, 2, 4);
          drop.endFill();
          midground.push(drop);
          stage.addChild(drop);
        }
      }
      let begTexture = PIXI.Texture.fromImage(CLOUD_TWO);
      let beg = new PIXI.extras.TilingSprite(begTexture, WIDTH, begTexture.height);
      beg.position.x = 0;
      beg.position.y = 0;
      beg.tilePosition.x = 0;
      beg.tilePosition.y = 0;
      beg.scale.y = .8;
      beg.alpha = .8;
      beg.tint = 0x9F9EA4;
      beg.filters = [filter];
      stage.addChild(beg);
      self.set('beg', beg);
      self.setProperties({ stage, renderer, background, foreground, midground });
      renderer.render(stage);
      requestAnimationFrame(self.animate.bind(self));
      requestAnimationFrame(self.animateCloud.bind(self));
    });
    loader.load();


  },

  cloud() {
    let filter = new PIXI.filters.DropShadowFilter();
    filter.blur = 10;
    filter.blurY = 20;
    filter.alpha = 0.4;
    let self = this;
    const WIDTH = $(window).width();
    let loader = PIXI.loader;
    loader.add(CLOUD);
    loader.add(CLOUD_TWO);
    loader.add(CLOUD_THREE);
    loader.once('complete', function(){
      let farTexture = PIXI.Texture.fromImage(CLOUD);
      let far = new PIXI.extras.TilingSprite(farTexture, WIDTH, farTexture.height);
      far.position.x = 0;
      far.position.y = 50;
      far.tilePosition.x = 0;
      far.tilePosition.y = 0;
      far.scale.y = .8;
      far.alpha = 1;
      far.tint = 0xA5A3A2;
      far.filters = [filter];
      self.get('stage').addChild(far);
      self.set('far', far);
      let midTexture = PIXI.Texture.fromImage(CLOUD_THREE);
      let mid = new PIXI.extras.TilingSprite(midTexture, WIDTH, midTexture.height);
      mid.position.x = 0;
      mid.position.y = 25;
      mid.tilePosition.x = 0;
      mid.tilePosition.y = 0;
      mid.scale.y = .8;
      mid.alpha = 1;
      mid.tint = 0x736F6E;
      mid.filters = [filter];
      self.get('stage').addChild(mid);
      self.set('mid', mid);
      let begTexture = PIXI.Texture.fromImage(CLOUD_TWO);
      let beg = new PIXI.extras.TilingSprite(begTexture, WIDTH, begTexture.height);
      beg.position.x = 0;
      beg.position.y = 0;
      beg.tilePosition.x = 0;
      beg.tilePosition.y = 0;
      beg.scale.y = .8;
      beg.alpha = 1;
      beg.tint = 0x9F9EA4;
      beg.filters = [filter];
      self.get('stage').addChild(beg);
      self.set('beg', beg);
      requestAnimationFrame(self.animateCloud.bind(self));
    });
    loader.load();
  },


  animateCloud(step) {
    let far = this.get('far');
    let beg = this.get('beg');
    let mid = this.get('mid');
    this.incrementProperty('beg.scale.y', Math.sin(beg.scale.y) * (beg.position.x * Math.cos(step)) );
    this.set('far.tilePosition.x', far.tilePosition.x - 0.2);
    this.set('beg.tilePosition.x', beg.tilePosition.x - 0.6);
    this.set('mid.tilePosition.x', mid.tilePosition.x - 0.4);
    requestAnimationFrame(this.animateCloud.bind(this));
  },

  animate(step) {
    const HEIGHT = $(window).height();
    let { stage, renderer, foreground, background, midground} = this.getProperties('renderer', 'stage', 'background', 'foreground', 'midground');
    background.forEach(function(o) {
      if (o.position.y > HEIGHT) {
        o.position.y = 0;
      } else {
        o.position.y += 9.5;
      }
    });
    foreground.forEach(function(o) {
      if (o.position.y > HEIGHT) {
        o.position.y = 0;
      } else {
        o.position.y += 15.5;
      }
    });
    midground.forEach(function(o) {
      if (o.position.y > HEIGHT) {
        o.position.y = 0;
      } else {
        o.position.y += 25;
      }
      o.position.x += Math.cos(step);
    });
    renderer.render(stage);
    requestAnimationFrame(this.animate.bind(this));
  }

});
