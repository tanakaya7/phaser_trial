import * as CONSTANTS from "./constants"

export const keydownEventHandlers = {
  " ": Space,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowDown
}

function movable_to(scene, deltaX, deltaY) {
  const x = scene._player._x + deltaX
  const y = scene._player._y + deltaY

  if (x === 0 || x === scene._map.width - 1) return false
  if (y === 0 || y === scene._map.height - 1) return false

  const tile = scene._map.getTileAt(x, y, true)

  return !CONSTANTS.COLLISION_TILES.includes(tile.index)
}

function Space(scene, event) {
  const tile =
    scene._map.getTileAt(scene._player._x, scene._player._y, true)

  if (scene.scene.key === "main")
    SpaceKeydownOnMain(scene, tile, event)
  else if (scene.scene.key === "cave")
    SpaceKeydownOnCave(scene, tile, event)
}

function SpaceKeydownOnMain(scene, tile, event) {
  if (tile.index === CONSTANTS.ENTRANCE) {
    scene.cameras.main.fadeOut(1000, 0, 0, 0, (camera, progress) => {
      if (progress === 1) {
        scene.scene.switch("cave")
        scene.cameras.main.fadeIn()
      }
    })
  }
}

function SpaceKeydownOnCave(scene, tile, event) {
  if (tile.index === CONSTANTS.EXIT) {
    scene.cameras.main.fadeOut(1000, 0, 0, 0, (camera, progress) => {
      if (progress === 1) {
        scene.scene.switch("main")
        scene.cameras.main.fadeIn()
      }
    })
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
