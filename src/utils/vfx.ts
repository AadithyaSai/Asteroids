import { AnimatedSprite, Application, Rectangle, Texture } from "pixi.js";

let explosion: AnimatedSprite;

export function initVFX(app: Application) {
  const explosionTextures: Texture[] = [];
  const explosionBase = Texture.from("explosionbase");
  for (let i = 1; i <= 64; i++) {
    explosionTextures.push(
      new Texture({
        source: explosionBase.source,
        frame: new Rectangle((i % 8) * 512, Math.floor(i / 8) * 512, 512, 512),
      })
    );
  }
  explosion = new AnimatedSprite(explosionTextures);
  explosion.anchor.set(0.5);
  explosion.loop = false;
  app.stage.addChild(explosion);
}

export function playExplosion(x: number, y: number) {
  explosion.position.set(x, y);
  explosion.gotoAndPlay(0);
}
