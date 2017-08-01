//three steps

//initialize kontra
kontra.init();

//basic sprite obj
var sprite = kontra.sprite({
  x: 100,
  y: 50,
  width: 50,
  height: 100,
  color: 'blue',
  dx:1
});

//update & render
var loop = kontra.gameLoop({
  // checks
  update: function() {
    if(sprite.x >= 206) {
      sprite.x = 205;
      sprite.dx = -1;
    } else if (sprite.x <= 0) {
      sprite.x = 1;
      sprite.dx = 1;
    }
    sprite.update()
  },
  // can have on sprite itself
  render: function() {
    sprite.render()
  }
});

//start the loop
loop.start();
