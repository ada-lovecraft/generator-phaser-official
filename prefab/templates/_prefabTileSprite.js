'use strict';

var <%= _.capitalize(prefabName) %> = function(game, x, y, width, height) {
  Phaser.TileSprite.call(this, game, x, y, width, height, '<%= prefabSpriteKey %>');

  // initialize your prefab here
  
};

<%= _.capitalize(prefabName) %>.prototype = Object.create(Phaser.TileSprite.prototype);
<%= _.capitalize(prefabName) %>.prototype.constructor = <%= _.capitalize(prefabName) %>;

<%= _.capitalize(prefabName) %>.prototype.update = function() {
  
  // write your prefab's specific update code here
  
};

module.exports = <%= _.capitalize(prefabName) %>;
