import Phaser from "phaser/dist/phaser.min"

import mainScene from "../dragon/main"
import caveScene from "../dragon/cave"
import { keydownEventHandlers as mainHandlers } from "../dragon/main/event_handlers"
import { keydownEventHandlers as caveHandlers } from "../dragon/cave/event_handlers"

const config = {
  type: Phaser.CANVAS,
  parent: "screen",
  width: 320,
  height: 320,
  scene: [mainScene, caveScene]
}

const game = new Phaser.Game(config)
const sceneNames = ["main", "cave"]

const keydownEventHandlerSets = {
  main: mainHandlers,
  cave: caveHandlers
}

window.document.onkeydown = event => {
  const sceneName = sceneNames.find(n => {
    return game.scene.isActive(n)
  })

  if (sceneName) {
    const h = keydownEventHandlerSets[sceneName][event.key]
    const scene = game.scene.getScene(sceneName)
    if (h) h(scene, event)
  }
}
