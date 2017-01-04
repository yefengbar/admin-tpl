/*jshint node:true*/
/* global require, module */
var crypto = require('crypto');
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
    // fingerprint:{
    //   customHash:function(buttfer, pathToFile){
    //     var md5 = crypto.createHash('md5');
    //     md5.update(buttfer);
    //     return md5.digest('hex');
    //   }
    // }

  });
  app.import('bower_components/layer/build/layer.js', {using: [{transformation: 'amd', as: "layer"}]});
  app.import('bower_components/layer/build/skin/default/layer.css');
  // app.import('vendor/allgames.js');
  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
