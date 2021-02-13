import { Logo } from '../objects'

export class PlayScene extends Phaser.Scene {
  private logo: Logo

  constructor() {
    super({ key: 'PlayScene' })
  }

  create(): void {
    this.logo = new Logo({ scene: this, x: 400, y: 300, texture: 'logo' })
  }
}
