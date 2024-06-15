import { Application, Assets, Texture, TilingSprite } from "pixi.js";
import { animateShip, createShip, resetShipData } from "./ship";
import { animateAsteroids, createAsteroids } from "./asteroid";
import { AsteroidType, BulletType } from "./utils/types";
import { updateGameLogic } from "./gamelogic";
import { animateBullets } from "./bullet";

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
    { alias: "ship", src: "assets/png/ship.png" },
    { alias: "shiptrail", src: "assets/png/shiptrail.png" },
    { alias: "bullet", src: "assets/png/bullet.png" },
    { alias: "bigAsteroid", src: "assets/png/asteroid_big.png" },
    { alias: "medAsteroid", src: "assets/png/asteroid_med.png" },
    { alias: "smallAsteroid", src: "assets/png/asteroid_small.png" },
    { alias: "background", src: "assets/png/background.png" },
    { alias: "explosionbase", src: "assets/png/explosions.png" },
  ];

  await Assets.load(assets);
  console.log("Assets loaded");
}

export async function startGame() {
  const app = await setup();
  await preload();

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
      resetShipData();
      app.destroy();
    }
  });
}
