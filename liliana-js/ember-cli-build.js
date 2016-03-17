/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
  });
  app.import(app.bowerDirectory + '/bootstrap/dist/js/bootstrap.js');
  app.import(app.bowerDirectory + '/bootstrap/dist/css/bootstrap.css');
  app.import('vendor/snowfall.jquery.js');
  app.import('vendor/pixi.js');
  app.import('vendor/pixi.js.map');
  app.import(app.bowerDirectory + '/wow.js/dist/wow.js');
  app.import(app.bowerDirectory + '/animate.css/animate.css');
  return app.toTree();
};
