export default function create() {
  this._map = this.make.tilemap({key: "map"})
  const background = this._map.addTilesetImage("background")
  const groundLayer =
    this._map.createDynamicLayer("World", background, 0, 0);

  this._player = this.add.sprite(0, 0, "player")
  this._player.setOrigin(0, 0)
  this._player.setFrame(0)

  this.cameras.main.setBounds(0, 0,
    this._map.widthInPixels, this._map.heightInPixels);
  this.cameras.main.startFollow(this._player);

  this._cursors = this.input.keyboard.createCursorKeys()
}
