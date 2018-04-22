import Phaser from "phaser/dist/phaser.min"
import BackgroundImage from "../images/background.png"
import PlayerSprite from "../images/player-sprite.png"

const config = {
  type: Phaser.AUTO,
  parent: "#screen",
  width: 640,
  height: 640,
  scene: {
    key: "main",
    preload: preload,
    create: create
  }
}

const game = new Phaser.Game(config)

function preload() {
  this.load.image("background", BackgroundImage)
  this.load.spritesheet("player", PlayerSprite, {
    frameWidth: 64, frameHeight: 64
  })
}

function create() {
  this.add.group({
    key: "background",
    repeat: 9,
    setXY: {
      x: 32,
      y: 32,
      stepX: 64,
      stepY: 0
    }
  })

  const player = this.add.sprite(0, 0, "player")
  player.setOrigin(0, 0)
  player.setFrame(0)
}
