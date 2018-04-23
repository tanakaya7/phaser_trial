import Phaser from "phaser/dist/phaser.min"

import preload from "../lib/preload"
import create from "../lib/create"
import update from "../lib/update"

const config = {
  type: Phaser.CANVAS,
  parent: "#screen",
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
