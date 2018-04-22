import Phaser from "phaser/dist/phaser.min"
import BackgroundSprite from "../images/background-sprite.png"
import PlayerSprite from "../images/player-sprite.png"

const config = {
  type: Phaser.CANVAS,
  parent: "#screen",
  width: 320,
  height: 320,
  scene: {
    key: "main",
    preload: preload,
    create: create,
    update: update
  }
}

const game = new Phaser.Game(config)
let map
let player
let cursors

function preload() {
  this.load.tilemapTiledJSON("map", "/dragon/map.json")
  this.load.spritesheet("background", BackgroundSprite, {
    frameWidth: 64, frameHeight: 64
  })
  this.load.spritesheet("player", PlayerSprite, {
    frameWidth: 64, frameHeight: 64
  })
}

function create() {
  map = this.make.tilemap({key: "map"})
  const background = map.addTilesetImage("background")
  const groundLayer = map.createDynamicLayer("World", background, 0, 0);

  player = this.add.sprite(0, 0, "player")
  player.setOrigin(0, 0)
  player.setFrame(0)

  this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
  this.cameras.main.startFollow(player);

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
