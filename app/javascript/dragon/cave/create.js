import { keydownEventHandlers } from "./event_handlers"

export default function create() {
  const self = this
  this._cave = {}
  this._cave.map = this.make.tilemap({key: "cave_map"})
  const background = this._cave.map.addTilesetImage("background")
  this._cave.map.createDynamicLayer("floor", background, 0, 0);

  const player = createPlayer(this)

  prepareCamera(this)

  window.document.onkeydown = event => {
    const h = keydownEventHandlers[event.key]
    if (h) h(self, event)
    else console.log(event.key)
  }
}

function createPlayer(game) {
  const player = game.add.sprite(0, 0, "player")

  player.setOrigin(0, 0)
  player.setFrame(0)
  player._x = 1
  player._y = 1

  game._cave.player = player

  return player
}

function prepareCamera(game) {
  game.cameras.main.setBounds(0, 0,
    game._cave.map.widthInPixels, game._cave.map.heightInPixels);
  game.cameras.main.startFollow(game._cave.player);
}
