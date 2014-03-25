'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');



var PrefabGenerator = yeoman.generators.Base.extend({

  askFor: function () {
    var done = this.async();

    // have Yeoman greet the user
    this.log(this.yeoman);

    // replace it with a short and sweet description of your generator
    this.log(chalk.magenta('Let\'s create a prefab.'));
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
        default: 'prefab'
      },
      {
        name: 'prefabSpriteKey',
        message: 'What sprite key would you like to use?',
        default: 'player'
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