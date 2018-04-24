import Phaser from "phaser/dist/phaser.min"

import mainScene from "../dragon/main"
import caveScene from "../dragon/cave"
import { keydownEventHandlers } from "../dragon/event_handlers"

const config = {
  type: Phaser.CANVAS,
  parent: "screen",
  width: 320,
  height: 320,
  scene: [mainScene, caveScene]
}

const game = new Phaser.Game(config)
const sceneNames = ["main", "cave"]

window.document.onkeydown = event => {
  const sceneName = sceneNames.find(n => {
    return game.scene.isActive(n)
  })

  if (sceneName) {
    const h = keydownEventHandlers[event.key]
    const currentScene = game.scene.getScene(sceneName)
    if (h) h(currentScene, event)
  }
}
