'use strict';

var <%= _.capitalize(prefabName) %> = function(game, parent) {
  Phaser.Sprite.call(this, game, parent);

  // initialize your prefab here
  
};

<%= _.capitalize(prefabName) %>.prototype = Object.create(Phaser.Group.prototype);
<%= _.capitalize(prefabName) %>.prototype.constructor = <%= _.capitalize(prefabName) %>;

<%= _.capitalize(prefabName) %>.prototype.update = function() {
  
  // write your prefab's specific update code here
  
};

module.exports = <%= _.capitalize(prefabName) %>;
