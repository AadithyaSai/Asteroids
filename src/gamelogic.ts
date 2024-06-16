import { Application, Sprite } from "pixi.js";
import { AsteroidType, BulletType } from "./utils/types";
import { collisionCheck } from "./utils/common";
import { createAsteroids, incAsteroidCount, splitAsteroid } from "./asteroid";
import { destroyShip } from "./ship";

export function updateGameLogic(
  app: Application,
  ship: Sprite,
  asteroids: AsteroidType[],
  bullets: BulletType[]
) {
  checkShipCollision(app, ship, asteroids);
  let score = checkBulletCollision(app, asteroids, bullets);

  if (asteroids.length === 0) {
    incAsteroidCount();
    createAsteroids(app, asteroids);
  }

  return score;
}

function checkShipCollision(
  app: Application,
  ship: Sprite,
  asteroids: AsteroidType[]
) {
  for (let i = 0; i < asteroids.length; i++) {
    const asteroid = asteroids[i].asteroid;
    if (ship.visible) {
      if (collisionCheck(asteroid, ship)) {
        destroyShip(app, ship);
        splitAsteroid(app, asteroids, i);
      }
    }
  }
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
}
