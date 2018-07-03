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
  const sceneName = sceneNames.find(n => game.scene.isActive(n))

  if (sceneName) return game.scene.getScene(sceneName)
}

game._score = 0

document.onkeydown = event => {
  const handler = keydownEventHandlers[event.key]
  const currentScene = game._currentScene()

  if (handler && currentScene) handler(currentScene, event)
}

const keysSection = document.getElementById("keys")
const keySpans = keysSection.getElementsByTagName("span")

for (var i = 0; i < keySpans.length; i++) {
  const span = keySpans[i]

  span.onclick = event => {
    const handler = keydownEventHandlers[span.dataset.key]
    const currentScene = game._currentScene()

    if (handler && currentScene) handler(currentScene, null)
  }
}
