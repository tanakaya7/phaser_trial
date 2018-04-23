import Phaser from "phaser/dist/phaser.min"

import mainScene from "../dragon/main"

const config = {
  type: Phaser.CANVAS,
  parent: "screen",
  width: 320,
  height: 320,
  scene: [mainScene]
}

const game = new Phaser.Game(config)
