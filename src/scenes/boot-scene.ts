import logo from '../assets/logo.png'

export class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: 'BootScene' })
  }

  public preload() {
    this.load.image('logo', logo)
  }

  public create() {
    this.scene.start('PlayScene')
  }
}
