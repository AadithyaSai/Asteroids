import { Application, Assets, Texture, TilingSprite } from "pixi.js";
import { sound } from "@pixi/sound";
import { animateShip, createShip, resetShipData } from "./ship";
import { animateAsteroids, createAsteroids } from "./asteroid";
import { AsteroidType, BulletType } from "./utils/types";
import { updateGameLogic } from "./gamelogic";
import { animateBullets } from "./bullet";

import ship from "./assets/png/ship.png";
import shiptrail from "./assets/png/shiptrail.png";
import bullet from "./assets/png/bullet.png";
import bigAsteroid from "./assets/png/asteroid_big.png";
import medAsteroid from "./assets/png/asteroid_med.png";
import smallAsteroid from "./assets/png/asteroid_small.png";
import background from "./assets/png/background.png";
import explosionbase from "./assets/png/explosions.png";

import bgm from "./assets/sounds/bgm.ogg";
import explosion from "./assets/sounds/explosion.wav";
import shoot from "./assets/sounds/shoot.wav";
import shipExplosion from "./assets/sounds/shipexplosion.flac";
import thrust from "./assets/sounds/thrust.wav";

const keyFlags = new Map<string, boolean>();
keyFlags.set("ArrowUp", false);
keyFlags.set("ArrowDown", false);
keyFlags.set("ArrowLeft", false);
keyFlags.set("ArrowRight", false);
keyFlags.set("w", false);
keyFlags.set("s", false);
keyFlags.set("a", false);
keyFlags.set("d", false);
keyFlags.set(" ", false);

window.addEventListener("keydown", (event) => {
  if (keyFlags.has(event.key)) {
    event.preventDefault();
    keyFlags.set(event.key, true);
  }
});

window.addEventListener("keyup", (event) => {
  if (keyFlags.has(event.key)) {
    event.preventDefault();
    keyFlags.set(event.key, false);
  }
});

async function setup() {
  const app = new Application();

  await app.init({
    background: "#000",
    resizeTo: window,
    antialias: true,
    autoDensity: true,
    resolution: 2,
  });
  document.getElementById("game")!.innerHTML = "";
  document.getElementById("game")!.appendChild(app.canvas);

  console.log("PIXI Application setup complete");

  return app;
}

async function preload() {
  const assets = [
    { alias: "ship", src: ship },
    { alias: "shiptrail", src: shiptrail },
    { alias: "bullet", src: bullet },
    { alias: "bigAsteroid", src: bigAsteroid },
    { alias: "medAsteroid", src: medAsteroid },
    { alias: "smallAsteroid", src: smallAsteroid },
    { alias: "background", src: background },
    { alias: "explosionbase", src: explosionbase },
  ];

  await Assets.load(assets);

  sound.add("bgm", bgm);
  sound.add("explosion", explosion);
  sound.add("shoot", shoot);
  sound.add("shipExplosion", shipExplosion);
  sound.add("thrust", thrust);
}

export async function startGame() {
  const app = await setup();
  await preload();

  sound.play("bgm", { loop: true });

  const bg = Texture.from("background");
  const bgTiles = new TilingSprite({
    texture: bg,
    width: app.screen.width,
    height: app.screen.height,
  });
  app.stage.addChild(bgTiles);

  let asteroids: AsteroidType[] = [];
  let bullets: BulletType[] = [];

  let ship = createShip(app);
  createAsteroids(app, asteroids);

  // Add the animation callbacks to the application's ticker.
  app.ticker.add((tick) => {
    tick.maxFPS = 60;
    animateShip(app, ship, keyFlags, bullets);

    animateAsteroids(app, asteroids);
    animateBullets(app, bullets);

    updateGameLogic(app, ship, asteroids, bullets);

    if (ship.visible === false) {
      window.dispatchEvent(new Event("gameover"));
      sound.stop("bgm");
      resetShipData();
      app.destroy();
    }
  });
}
