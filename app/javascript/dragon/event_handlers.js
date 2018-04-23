export const keydownEventHandlers = {
  "ArrowLeft": (player, event) => {
    player.setFrame(0)
    if (player._x > 0) player._x--
  },
  "ArrowRight": (player, event) => {
    player.setFrame(1)
    if (player._x < 9) player._x++
  },
  "ArrowUp": (player, event) => {
    if (player._y > 0) player._y--
  },
  "ArrowDown": (player, event) => {
    if (player._y < 9) player._y++
  }
}
