import { WALL, EXIT } from "./constants"

export const keydownEventHandlers = {
  " ": Space,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowDown
}

function movable_to(game, deltaX, deltaY) {
  const vars = game._cave
  const x = vars.player._x + deltaX
  const y = vars.player._y + deltaY

  if (x === 0) return false
  if (x === vars.map.width - 1) return false
  if (y === 0) return false
  if (y === vars.map.height - 1) return false

  const tile = vars.map.getTileAt(x, y, true)

  return (tile.index !== WALL)
}

function Space(game, event) {
  const vars = game._cave
  const tile =
    vars.map.getTileAt(vars.player._x, vars.player._y, true)

  if (tile.index === EXIT) {
    game.scene.start("main")
  }
}

function ArrowLeft(game, event) {
  game._cave.player.setFrame(0)
  if (movable_to(game, -1, 0)) game._cave.player._x--
}

function ArrowRight(game, event) {
  game._cave.player.setFrame(1)
  if (movable_to(game, 1, 0)) game._cave.player._x++
}

function ArrowUp(game, event) {
  if (movable_to(game, 0, -1)) game._cave.player._y--
}

function ArrowDown(game, event) {
  if (movable_to(game, 0, 1)) game._cave.player._y++
}
