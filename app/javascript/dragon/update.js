export default function update(time, delta) {
  if (this._cursors.left.isDown) {
    this._player.setFrame(0)
    if (this._player.x > 0) this._player.setX(this._player.x - 4)
  }
  else if (this._cursors.right.isDown) {
    this._player.setFrame(1)
    if (this._player.x < 640 - 64) this._player.setX(this._player.x + 4)
  }
  else if (this._cursors.up.isDown) {
    if (this._player.y > 0) this._player.setY(this._player.y - 4)
  }
  else if (this._cursors.down.isDown) {
    if (this._player.y < 640 - 64) this._player.setY(this._player.y + 4)
  }
  else {
  }
}
