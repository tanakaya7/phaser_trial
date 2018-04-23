let player

export default function create() {
  this._map = this.make.tilemap({key: "map"})
  const background = this._map.addTilesetImage("background")
  const groundLayer =
    this._map.createDynamicLayer("World", background, 0, 0);

  player = this.add.sprite(0, 0, "player")
  this._player = player
  this._player.setOrigin(0, 0)
  this._player.setFrame(0)
  this._player._x = 0
  this._player._y = 0

  this.cameras.main.setBounds(0, 0,
    this._map.widthInPixels, this._map.heightInPixels);
  this.cameras.main.startFollow(this._player);

  window.document.onkeydown = keydownEventHandler
}

function keydownEventHandler(event){
  if (event.key === "ArrowLeft") {
    player.setFrame(0)
    if (player._x > 0) player._x--
  }
  else if (event.key === "ArrowRight") {
    player.setFrame(1)
    if (player._x < 9) player._x++
  }
  else if (event.key === "ArrowUp") {
    if (player._y > 0) player._y--
  }
  else if (event.key === "ArrowDown") {
    if (player._y < 9) player._y++
  }
}
