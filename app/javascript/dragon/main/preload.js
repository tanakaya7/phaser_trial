import TilesSprite from "../../images/tiles-sprite.png"
import PlayerSprite from "../../images/player-sprite.png"

export default function preload() {
  this.load.tilemapTiledJSON("main_map", "/dragon/main_map.json")
  this.load.spritesheet("tiles", TilesSprite, {
    frameWidth: 64, frameHeight: 64
  })
  this.load.spritesheet("player", PlayerSprite, {
    frameWidth: 64, frameHeight: 64
  })
}
