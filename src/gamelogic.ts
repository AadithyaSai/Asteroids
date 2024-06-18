import { Application, Sprite } from "pixi.js";
import { AsteroidType, BulletType, GameStateChanges } from "./utils/types";
import { collisionCheck } from "./utils/common";
import { createAsteroids, incAsteroidCount, splitAsteroid } from "./asteroid";
import { destroyShip, isInvulnerable } from "./ship";
import { playAsteroidExplosion, playShipExplosion } from "./utils/vfx";
import { sound } from "@pixi/sound";

let lives = 3;

export function resetLives() {
  lives = 3;
}

export function updateGameLogic(
  app: Application,
  ship: Sprite,
  asteroids: AsteroidType[],
  bullets: BulletType[]
): GameStateChanges {
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
  if (ship.visible && !isInvulnerable()) {
    for (let i = 0; i < asteroids.length; i++) {
      const asteroid = asteroids[i].asteroid;
      if (collisionCheck(asteroid, ship)) {
        destroyShip(ship);
        splitAsteroid(app, asteroids, i);
        playShipExplosion(ship.position.x, ship.position.y);
        sound.stop("thrust");
        sound.play("shipExplosion");
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
        playAsteroidExplosion(asteroid.position.x, asteroid.position.y);
        sound.play("explosion");

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
