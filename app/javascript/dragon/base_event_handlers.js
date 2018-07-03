import { keydownEventHandlers } from "./event_handlers"

export default (game) => {
  document.onkeydown = event => {
    const handler = keydownEventHandlers[event.key]
    const currentScene = game._currentScene()

    if (handler && currentScene) handler(currentScene, event)
  }

  const keysSection = document.getElementById("keys")
  const keySpans = keysSection.getElementsByTagName("span")

  for (let i = 0; i < keySpans.length; i++) {
    const span = keySpans[i]

    span.onclick = event => {
      const handler = keydownEventHandlers[span.dataset.key]
      const currentScene = game._currentScene()

      if (handler && currentScene) handler(currentScene, null)
    }
  }
}
