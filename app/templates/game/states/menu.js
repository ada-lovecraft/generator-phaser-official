(function() {
  'use strict';
  function Menu() {}
  
  Menu.prototype = {
    preload: function() {

    },
    create: function() {
      var style = { font: '65px Arial', fill: '#ffffff', align: 'center'};
      this.sprite = game.add.sprite(game.world.centerX, 138, 'yeoman');
      this.sprite.anchor.setTo(0.5, 0.5);

      this.titleText = game.add.text(game.world.centerX, 300, '\'Allo, \'Allo!', style);
      this.titleText.anchor.setTo(0.5, 0.5);

      this.instructionsText = game.add.text(game.world.centerX, 400, 'Click anywhere to play "Click The Yeoman Logo"', { font: '16px Arial', fill: '#ffffff', align: 'center'});
      this.instructionsText.anchor.setTo(0.5, 0.5);

      this.sprite.angle = -20;
      game.add.tween(this.sprite).to({angle: 20}, 1000, Phaser.Easing.Linear.NONE, true, 0, 1000, true);
    },
    update: function() {
      if(game.input.activePointer.justPressed()) {
        game.state.start('play');
      }
    }
  };
  MenuState = Menu;
}());