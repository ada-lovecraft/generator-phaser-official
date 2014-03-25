'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');


var StateGenerator = yeoman.generators.NamedBase.extend({
  init: function () {
    console.log('Creating the ' + this.name + ' game state.');
  },

  files: function () {
    this.template('_state.js', 'game/states/' + this.name + '.js');
    
  }
});

module.exports = StateGenerator;