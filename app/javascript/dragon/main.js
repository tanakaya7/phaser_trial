import Phaser from "phaser/dist/phaser.min"

import preload from "./main/preload"
import create from "./main/create"
import update from "./main/update"

const mainScene = new Phaser.Scene("main")

mainScene.preload = preload
mainScene.create = create
mainScene.update = update

export default mainScene
