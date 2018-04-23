let player

export default function create() {
  this._map = this.make.tilemap({key: "map"})
  const background = this._map.addTilesetImage("background")
  const groundLayer =
    this._map.createDynamicLayer("World", background, 0, 0);

  createPlayer(this)
  prepareCamera(this)

  window.document.onkeydown = event => {
    const h = keydownEventHandlers[event.key]
    if (h) h(event)
  }
}

function createPlayer(game) {
  player = game.add.sprite(0, 0, "player")

  player.setOrigin(0, 0)
  player.setFrame(0)
  player._x = 0
  player._y = 0

  game._player = player
}

function prepareCamera(game) {
  game.cameras.main.setBounds(0, 0,
    game._map.widthInPixels, game._map.heightInPixels);
  game.cameras.main.startFollow(game._player);
}

const keydownEventHandlers = {
  "ArrowLeft": event => {
    player.setFrame(0)
    if (player._x > 0) player._x--
  },
  "ArrowRight": event => {
    player.setFrame(1)
    if (player._x < 9) player._x++
  },
  "ArrowUp": event => {
    if (player._y > 0) player._y--
  },
  "ArrowDown": event => {
    if (player._y < 9) player._y++
  }
}
