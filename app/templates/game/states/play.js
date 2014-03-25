(function() {
  'use strict';
  function Play() {}
  Play.prototype = {
    create: function() {
      game.physics.startSystem(Phaser.Physics.ARCADE);
      this.sprite = game.add.sprite(game.width/2, game.height/2, 'yeoman');
      this.sprite.inputEnabled = true;
      
      game.physics.arcade.enable(this.sprite);
      this.sprite.body.collideWorldBounds = true;
      this.sprite.body.bounce.setTo(1,1);
      this.sprite.body.velocity.x = game.rnd.integerInRange(-500,500);
      this.sprite.body.velocity.y = game.rnd.integerInRange(-500,500);

      this.sprite.events.onInputDown.add(this.clickListener, this);
    },
    update: function() {

    },
    clickListener: function() {
      game.state.start('gameover');
    }
  };
  PlayState = Play;
}());