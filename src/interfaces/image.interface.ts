export interface IImage {
  scene: Phaser.Scene
  x: number
  y: number
  texture: string | Phaser.Textures.Texture
  frame?: number
}
