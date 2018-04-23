import Phaser from "phaser/dist/phaser.min"

import mainScene from "../dragon/main"
import caveScene from "../dragon/cave"

const config = {
  type: Phaser.CANVAS,
  parent: "screen",
  width: 320,
  height: 320,
  scene: [mainScene, caveScene]
}

const game = new Phaser.Game(config)
