import { AnimatedSprite, Application, Rectangle, Texture } from "pixi.js";

let asteroidExplosion: AnimatedSprite;
let shipExplosion: AnimatedSprite;

export function initVFX(app: Application) {
  const asteroidExplosionTextures: Texture[] = [];
  const asteroidExplosionBase = Texture.from("explosionbase");
  for (let i = 1; i <= 64; i++) {
    asteroidExplosionTextures.push(
      new Texture({
        source: asteroidExplosionBase.source,
        frame: new Rectangle((i % 8) * 512, Math.floor(i / 8) * 512, 512, 512),
      })
    );
  }
  asteroidExplosion = new AnimatedSprite(asteroidExplosionTextures);
  asteroidExplosion.anchor.set(0.5);
  asteroidExplosion.loop = false;

  app.stage.addChild(asteroidExplosion);
}

export function playAsteroidExplosion(x: number, y: number) {
  asteroidExplosion.position.set(x, y);
  asteroidExplosion.gotoAndPlay(0);
}
