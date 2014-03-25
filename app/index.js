'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var PhaserGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // have Yeoman greet the user
    this.log(this.yeoman);

    // replace it with a short and sweet description of your generator
    this.log(chalk.magenta('You\'re using the fantastic Phaser generator.'));

    var prompts = [{
        name: 'projectName',
        message: 'What is the name of your project?',
        default: 'phaser game'
      },
      {
        name: 'phaserVersion',
        message: 'Which Phaser version would you like to use?',
        default: '2.0.1'
      },
      {
        name: 'gameWidth',
        message: 'Game Display Width',
        default: 800
      },
      {
        name: 'gameHeight',
        message: 'Game Display Height',
        default: 600
      }
    ];

    this.prompt(prompts, function (props) {
      this.projectName = props.projectName
      this.phaserVersion = props.phaserVersion;
      this.gameHeight = props.gameHeight;
      this.gameWidth = props.gameWidth;

      done();
    }.bind(this));
  },

  app: function () {
    // base files
    this.template('Gruntfile.js','Gruntfile.js');
    this.template('_index.html', 'index.html');
    this.template('css/_styles.css', 'css/styles.css');
    this.template('_bower.json', 'bower.json');
    this.template('_config.json','config.json');
    this.template('_package.json','package.json');

    // game files
    this.template('game/_main.js','game/main.js');
    this.template('game/states/_boot.js','game/states/boot.js');
    this.copy('game/states/preload.js');
    this.copy('game/states/menu.js');
    this.copy('game/states/play.js');
    this.copy('game/states/gameover.js');
    this.copy('assets/preloader.gif');
    this.copy('assets/yeoman-logo.png');
    
  },
  runtime: function() {
    this.copy('bowerrc', '.bowerrc');
    this.copy('gitignore', '.gitignore');
  },
  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
  }
});

module.exports = PhaserGenerator;