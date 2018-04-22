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
    create: create,
    update: update
  }
}

const game = new Phaser.Game(config)
let player
let cursors

function preload() {
  this.load.image("background", BackgroundImage)
  this.load.spritesheet("player", PlayerSprite, {
    frameWidth: 64, frameHeight: 64
  })
}

function create() {
  for(let i = 0; i < 10; i++) {
    this.add.group({
      key: "background",
      repeat: 9,
      setXY: {
        x: 32,
        y: 32 + i * 64,
        stepX: 64,
        stepY: 0
      }
    })
  }

  player = this.add.sprite(0, 0, "player")
  player.setOrigin(0, 0)
  player.setFrame(0)

  cursors = this.input.keyboard.createCursorKeys()
}

function update(time, delta) {
  if (cursors.left.isDown) {
    player.setFrame(0)
    if (player.x > 0) player.setX(player.x - 4)
  }
  else if (cursors.right.isDown) {
    player.setFrame(1)
    if (player.x < 640 - 64) player.setX(player.x + 4)
  }
  else if (cursors.up.isDown) {
    if (player.y > 0) player.setY(player.y - 4)
  }
  else if (cursors.down.isDown) {
    if (player.y < 640 - 64) player.setY(player.y + 4)
  }
  else {
  }
}
