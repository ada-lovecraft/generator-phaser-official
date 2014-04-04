'use strict';

var <%= _.capitalize(prefabName) %> = function(game, x, y, frame) {
  Phaser.Sprite.call(this, game, x, y, '<%= prefabSpriteKey %>', frame);

  // initialize your prefab here
  
};

<%= _.capitalize(prefabName) %>.prototype = Object.create(Phaser.Sprite.prototype);
<%= _.capitalize(prefabName) %>.prototype.constructor = <%= _.capitalize(prefabName) %>;

<%= _.capitalize(prefabName) %>.prototype.update = function() {
  
  // write your prefab's specific update code here
  
};

module.exports = <%= _.capitalize(prefabName) %>;
