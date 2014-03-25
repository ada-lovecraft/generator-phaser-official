'use strict';

//global variables
var BootState, PreloadState, MenuState, PlayState, GameOverState, game;
window.onload = function () {
  console.log('setting up the game');
  game = new Phaser.Game(<%= gameWidth %>, <%= gameHeight %>, Phaser.AUTO, '<%= _.slugify(projectName) %>');
  game.state.add('boot', BootState);
  game.state.add('preload', PreloadState);
  game.state.add('menu', MenuState);
  game.state.add('play', PlayState);
  game.state.add('gameover', GameOverState);

  game.state.start('boot');
};