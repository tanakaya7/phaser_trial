import Phaser from "phaser/dist/phaser.min"

import preload from "../dragon/preload"
import create from "../dragon/create"
import update from "../dragon/update"

const config = {
  type: Phaser.CANVAS,
  parent: "screen",
  width: 320,
  height: 320,
  scene: {
    key: "main",
    preload: preload,
    create: create,
    update: update
  }
}

new Phaser.Game(config)
