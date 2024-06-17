import { Application, Sprite } from "pixi.js";
import { AsteroidType, BulletType, GameStateUpdate } from "./utils/types";
import { collisionCheck } from "./utils/common";
import { createAsteroids, incAsteroidCount, splitAsteroid } from "./asteroid";
import { destroyShip } from "./ship";

let lives = 3;

export function resetLives() {
  lives = 3;
}

export function updateGameLogic(
  app: Application,
  ship: Sprite,
  asteroids: AsteroidType[],
  bullets: BulletType[]
): GameStateUpdate {
  let killed = checkShipCollision(app, ship, asteroids);
  if (killed) {
    lives--;
  }
  let score = checkBulletCollision(app, asteroids, bullets);

  if (asteroids.length === 0) {
    incAsteroidCount();
    createAsteroids(app, asteroids);
  }

  return { score, lives, killed };
}

function checkShipCollision(
  app: Application,
  ship: Sprite,
  asteroids: AsteroidType[]
) {
  if (ship.visible) {
    for (let i = 0; i < asteroids.length; i++) {
      const asteroid = asteroids[i].asteroid;
      if (collisionCheck(asteroid, ship)) {
        destroyShip(app, ship);
        splitAsteroid(app, asteroids, i);
        return true;
      }
    }
  }
  return false;
}
function checkBulletCollision(
  app: Application,
  asteroids: AsteroidType[],
  bullets: BulletType[]
) {
  for (let i = 0; i < asteroids.length; i++) {
    const asteroid = asteroids[i].asteroid;
    const size = asteroids[i].size;
    for (let j = 0; j < bullets.length; j++) {
      const bullet = bullets[j].bullet;
      if (collisionCheck(asteroid, bullet)) {
        app.stage.removeChild(bullet);
        bullets.splice(j, 1);
        splitAsteroid(app, asteroids, i);

        switch (size) {
          case 0:
            return 20;
          case 1:
            return 40;
          case 2:
            return 100;
        }
      }
    }
  }
  return 0;
}
