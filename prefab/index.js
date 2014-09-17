'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');



var PrefabGenerator = yeoman.generators.NamedBase.extend({
  init: function() {
    this.log('Creating the new prefab:', this.name);
  },
  askFor: function () {
    var done = this.async();

    // replace it with a short and sweet description of your generator
    var prefabNamePattern = new RegExp(/^\S+$/);
    var prefabTypes = "stg";

    var prompts = [
        {
          name: 'prefabType',
          message: 'What is the type of your prefab ([s]prite, [t]ileSprite or [g]roup)?',
          validate: function (input) {
            if (input && input.length === 1 && prefabTypes.indexOf(input) > -1) {
              return true;
            } else {
              return 'The type can be only s, t or g.';
            }
          },
          default: 's';
        },
        {
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
      this.prefabType = props.prefabType;
      done();
    }.bind(this));
  },


  files: function () {
    this.template('_prefab.js', 'game/prefabs/' + this.prefabName + '.js');
  }
});

module.exports = PrefabGenerator;