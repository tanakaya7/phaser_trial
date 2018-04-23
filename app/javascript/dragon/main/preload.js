import BackgroundSprite from "../../images/background-sprite.png"
import PlayerSprite from "../../images/player-sprite.png"

export default function preload() {
  this.load.tilemapTiledJSON("map", "/dragon/map.json")
  this.load.spritesheet("background", BackgroundSprite, {
    frameWidth: 64, frameHeight: 64
  })
  this.load.spritesheet("player", PlayerSprite, {
    frameWidth: 64, frameHeight: 64
  })
}
