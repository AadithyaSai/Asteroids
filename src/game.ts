import { Application, Assets, Texture, TilingSprite } from "pixi.js";
import { sound } from "@pixi/sound";
import { animateShip, createShip, resetShipData } from "./ship";
import { animateAsteroids, createAsteroids } from "./asteroid";
import { AsteroidType, BulletType } from "./utils/types";
import { updateGameLogic } from "./gamelogic";
import { animateBullets } from "./bullet";
import { initVFX } from "./utils/vfx";

import { files } from "./assetlist";

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
    { alias: "ship", src: files.ship },
    { alias: "shiptrail", src: files.shiptrail },
    { alias: "bullet", src: files.bullet },
    { alias: "background", src: files.background },
    { alias: "explosionbase", src: files.explosionbase },
    { alias: "meteorBrown_big1", src: files.meteorBrown_big1 },
    { alias: "meteorBrown_big2", src: files.meteorBrown_big2 },
    { alias: "meteorBrown_big3", src: files.meteorBrown_big3 },
    { alias: "meteorBrown_big4", src: files.meteorBrown_big4 },
    { alias: "meteorBrown_med1", src: files.meteorBrown_med1 },
    { alias: "meteorBrown_med2", src: files.meteorBrown_med2 },
    { alias: "meteorBrown_small1", src: files.meteorBrown_small1 },
    { alias: "meteorBrown_small2", src: files.meteorBrown_small2 },
    { alias: "meteorGrey_big1", src: files.meteorGrey_big1 },
    { alias: "meteorGrey_big2", src: files.meteorGrey_big2 },
    { alias: "meteorGrey_big3", src: files.meteorGrey_big3 },
    { alias: "meteorGrey_big4", src: files.meteorGrey_big4 },
    { alias: "meteorGrey_med1", src: files.meteorGrey_med1 },
    { alias: "meteorGrey_med2", src: files.meteorGrey_med2 },
    { alias: "meteorGrey_small1", src: files.meteorGrey_small1 },
    { alias: "meteorGrey_small2", src: files.meteorGrey_small2 },
  ];

  await Assets.load(assets);

  if (!sound.exists("bgm")) {
    sound.add("bgm", files.bgm);
  }
  if (!sound.exists("explosion")) {
    sound.add("explosion", files.explosion);
  }
  if (!sound.exists("shoot")) {
    sound.add("shoot", files.shoot);
  }
  if (!sound.exists("shipExplosion")) {
    sound.add("shipExplosion", files.shipExplosion);
  }
  if (!sound.exists("thrust")) {
    sound.add("thrust", files.thrust);
  }
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

  initVFX(app);

  let asteroids: AsteroidType[] = [];
  let bullets: BulletType[] = [];

  let ship = createShip(app);
  createAsteroids(app, asteroids);

  let score = 0;
  const scoreSpan = document.createElement("span");
  scoreSpan.id = "score";
  scoreSpan.innerText = String(score).padStart(5, "0");
  document.getElementById("game")!.appendChild(scoreSpan);

  // Add the animation callbacks to the application's ticker.
  app.ticker.add((tick) => {
    tick.maxFPS = 60;
    animateShip(app, ship, keyFlags, bullets);

    animateAsteroids(app, asteroids);
    animateBullets(app, bullets);

    const scored = updateGameLogic(app, ship, asteroids, bullets);
    if (scored) {
      score += scored;
      score = Math.min(score, 99999);
      scoreSpan.innerText = String(score).padStart(5, "0");
    }

    if (ship.visible === false) {
      window.dispatchEvent(new Event("gameover"));
      sound.stopAll();
      resetShipData();
      app.destroy();
    }
  });
}
