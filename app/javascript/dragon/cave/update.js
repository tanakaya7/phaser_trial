export default function update(time, delta) {
  const vars = this._cave

  vars.player.x = vars.player._x * 64
  vars.player.y = vars.player._y * 64

  const tile = vars.map.getTileAt(vars.player._x, vars.player._y, true)

  const div = document.getElementById("message")
  div.textContent = tile.index
}
