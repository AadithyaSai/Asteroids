import { AnimatedSprite, Application, Rectangle, Texture } from "pixi.js";

let asteroidExplosion: AnimatedSprite;
let shipExplosion: AnimatedSprite;

export function initVFX(app: Application) {
  const asteroidExplosionTextures: Texture[] = [];
  const asteroidExplosionBase = Texture.from("asteroidexplosionbase");
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
  asteroidExplosion.visible = false;

  const shipExplosionTextures: Texture[] = [];
  const shipExplosionBase = Texture.from("shipexplosionbase");
  for (let i = 1; i <= 64; i++) {
    shipExplosionTextures.push(
      new Texture({
        source: shipExplosionBase.source,
        frame: new Rectangle((i % 8) * 512, Math.floor(i / 8) * 512, 512, 512),
      })
    );
  }
  shipExplosion = new AnimatedSprite(shipExplosionTextures);
  shipExplosion.anchor.set(0.5);
  shipExplosion.loop = false;
  shipExplosion.visible = false;

  if (matchMedia("(max-width: 600px)").matches) {
    asteroidExplosion.scale.set(0.5);
    shipExplosion.scale.set(0.5);
  }

  app.stage.addChild(asteroidExplosion);
  app.stage.addChild(shipExplosion);
}

export function playAsteroidExplosion(x: number, y: number) {
  asteroidExplosion.visible = true;
  asteroidExplosion.position.set(x, y);
  asteroidExplosion.gotoAndPlay(0);
}

export function playShipExplosion(x: number, y: number) {
  shipExplosion.visible = true;
  shipExplosion.position.set(x, y);
  shipExplosion.gotoAndPlay(0);
}
