'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');



var PrefabGenerator = yeoman.generators.NamedBase.extend({
  init: function() {
    console.log('Creating the new prefab:', this.name);
  },
  askFor: function () {
    var done = this.async();

    // replace it with a short and sweet description of your generator
    var prefabNamePattern = new RegExp(/^\S+$/)

    var prompts = [{
        name: 'prefabName',
        message: 'What is the name of your prefab?',
        validate: function(input) {
          if(!prefabNamePattern.test(input)) {
            return 'The name cannot contain spaces or punctuation';
          } else {
            return true;
          }
        },
        default: this.name
      },
      {
        name: 'prefabSpriteKey',
        message: 'What sprite key would you like to use?',
        default: this.name
      },
    ];

    this.prompt(prompts, function (props) {
      this.prefabName = props.prefabName;
      this.prefabSpriteKey = props.prefabSpriteKey;
      done();
    }.bind(this));
  },


  files: function () {
    this.template('_prefab.js', 'game/prefabs/' + this.prefabName + '.js');
  }
});

module.exports = PrefabGenerator;