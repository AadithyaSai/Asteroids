import { Application, Graphics } from "pixi.js";
import { AsteroidType, BulletType } from "./utils/types";
import { collisionCheck } from "./utils/common";
import { createAsteroids, splitAsteroid } from "./asteroid";
import { destroyShip } from "./ship";

export function updateGameLogic(
  app: Application,
  ship: Graphics,
  asteroids: AsteroidType[],
  bullets: BulletType[]
) {
  checkShipCollision(app, ship, asteroids);
  checkBulletCollision(app, asteroids, bullets);

  if (asteroids.length === 0) {
    createAsteroids(app, asteroids);
  }
}

function checkShipCollision(
  app: Application,
  ship: Graphics,
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
    for (let j = 0; j < bullets.length; j++) {
      const bullet = bullets[j].bullet;
      if (collisionCheck(asteroid, bullet)) {
        app.stage.removeChild(bullet);
        bullets.splice(j, 1);
        splitAsteroid(app, asteroids, i);
      }
    }
  }
}
