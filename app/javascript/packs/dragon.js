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

game._currentScene = () => {
  const sceneName = sceneNames.find(n => {
    return game.scene.isActive(n)
  })

  if (sceneName) return game.scene.getScene(sceneName)
}

window.document.onkeydown = event => {
  const currentScene = game._currentScene()

  if (currentScene) {
    const h = keydownEventHandlers[event.key]
    if (h) h(currentScene, event)
  }
}
