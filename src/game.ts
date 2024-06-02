import { Application } from "pixi.js";
import { animateShip, createShip } from "./ship";
import { animateAsteroids, createAsteroids } from "./asteroid";
import { AsteroidType, BulletType } from "./utils/types";
import { updateGameLogic } from "./gamelogic";
import { animateBullets } from "./bullet";

let loaded = false;

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

export async function startGame() {
  const app = await setup();

  let asteroids: AsteroidType[] = [];
  let bullets: BulletType[] = [];

  let ship = createShip(app);
  createAsteroids(app, asteroids);

  // Add the animation callbacks to the application's ticker.
  app.ticker.add((time) => {
    animateShip(app, ship, keyFlags, bullets);
    animateAsteroids(app, asteroids);
    animateBullets(app, bullets);

    updateGameLogic(app, ship, asteroids, bullets);

    if (ship.visible === false) {
      window.dispatchEvent(new Event("gameover"));
      app.destroy();
    }
  });
}
