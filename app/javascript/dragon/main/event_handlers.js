import { WALL, ENTRANCE } from "./constants"

export const keydownEventHandlers = {
  " ": Space,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowDown
}

function movable_to(scene, deltaX, deltaY) {
  const vars = scene._main
  const x = scene._player._x + deltaX
  const y = scene._player._y + deltaY

  if (x === 0) return false
  if (x === scene._map.width - 1) return false
  if (y === 0) return false
  if (y === scene._map.height - 1) return false

  const tile = scene._map.getTileAt(x, y, true)

  return (tile.index !== WALL)
}

function Space(scene, event) {
  const tile =
    scene._map.getTileAt(scene._player._x, scene._player._y, true)

  if (tile.index === ENTRANCE) {
    scene.scene.switch("cave")
  }
}

function ArrowLeft(scene, event) {
  scene._player.setFrame(0)
  if (movable_to(scene, -1, 0)) scene._player._x--
}

function ArrowRight(scene, event) {
  scene._player.setFrame(1)
  if (movable_to(scene, 1, 0)) scene._player._x++
}

function ArrowUp(scene, event) {
  if (movable_to(scene, 0, -1)) scene._player._y--
}

function ArrowDown(scene, event) {
  if (movable_to(scene, 0, 1)) scene._player._y++
}
