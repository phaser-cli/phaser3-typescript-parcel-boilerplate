import { BootScene, PlayScene } from './scenes'

export const GameConfig: Phaser.Types.Core.GameConfig = {
  title: 'title',
  version: '1.0.0',
  width: 800,
  height: 600,
  type: Phaser.AUTO,
  parent: 'game',
  scene: [BootScene, PlayScene],
  backgroundColor: '#fff',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        y: 200,
      },
    },
  },
}
