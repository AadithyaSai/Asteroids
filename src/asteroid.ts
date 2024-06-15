import {
  AnimatedSprite,
  Application,
  Rectangle,
  Sprite,
  Texture,
} from "pixi.js";
import { AsteroidType } from "./utils/types";

let count = 5; // Initial number of asteroids

export function incAsteroidCount() {
  count++;
}

export function createAsteroids(app: Application, asteroids: AsteroidType[]) {
  for (let i = 0; i < count; i++) {
    const asteroid = createAsteroid(3);

    const safe = 100; // Safe distance from the ship. 200/2
    const xpos = Math.random() * (app.screen.width / 2 - safe);
    const ypos = Math.random() * (app.screen.height / 2 - safe);

    asteroid.position.set(
      Math.random() > 0.5 ? xpos + app.screen.width / 2 + safe : xpos,
      Math.random() > 0.5 ? ypos + app.screen.height / 2 + safe : ypos
    );

    asteroid.rotation = Math.random() * Math.PI * 2;

    let heading = Math.random() * Math.PI * 2;

    app.stage.addChild(asteroid);
    asteroids.push({ asteroid, size: 3, heading: heading });
  }
}

function createAsteroid(scale: number) {
  let asteroid;
  if (scale == 3) {
    asteroid = Sprite.from("bigAsteroid");
  } else if (scale == 2) {
    asteroid = Sprite.from("medAsteroid");
  } else {
    asteroid = Sprite.from("smallAsteroid");
  }
  asteroid.anchor.set(0.5);

  return asteroid;
}

export function animateAsteroids(app: Application, asteroids: AsteroidType[]) {
  for (let i = 0; i < asteroids.length; i++) {
    const asteroid = asteroids[i].asteroid;
    const heading = asteroids[i].heading;
    const speed = 2 / asteroids[i].size;
    asteroid.position.x += speed * Math.cos(heading);
    asteroid.position.y += speed * Math.sin(heading);

    if (asteroid.position.x > app.screen.width + asteroid.width / 2) {
      asteroid.position.x = -asteroid.width / 2;
    }
    if (asteroid.position.x < -asteroid.width / 2) {
      asteroid.position.x = app.screen.width + asteroid.width / 2;
    }
    if (asteroid.position.y > app.screen.height + asteroid.height / 2) {
      asteroid.position.y = -asteroid.height / 2;
    }
    if (asteroid.position.y < -asteroid.height / 2) {
      asteroid.position.y = app.screen.height + asteroid.height / 2;
    }
  }
}

export function splitAsteroid(
  app: Application,
  asteroids: AsteroidType[],
  index: number
) {
  const explosionTextures: Texture[] = [];
  const explosionBase = Texture.from("explosionbase");
  for (let i = 1; i <= 64; i++) {
    explosionTextures.push(
      new Texture({
        source: explosionBase.source,
        frame: new Rectangle((i % 8) * 512, Math.floor(i / 8) * 512, 512, 512),
      })
    );
  }
  const explosion = new AnimatedSprite(explosionTextures);
  explosion.anchor.set(0.5);
  explosion.position.set(
    asteroids[index].asteroid.position.x,
    asteroids[index].asteroid.position.y
  );
  explosion.loop = false;

  const asteroid = asteroids[index].asteroid;
  const size = asteroids[index].size;

  const dir = [0, Math.PI];
  let heading = Math.random() * Math.PI * 2;
  if (size > 1) {
    for (let i = 0; i < 2; i++) {
      const newAsteroid = createAsteroid(size - 1);

      newAsteroid.position.set(asteroid.position.x, asteroid.position.y);
      newAsteroid.rotation = Math.random() * Math.PI * 2;

      app.stage.addChild(newAsteroid);
      asteroids.push({
        asteroid: newAsteroid,
        size: size - 1,
        heading: heading + dir[i],
      });
    }
  }

  app.stage.removeChild(asteroid);
  asteroids.splice(index, 1);

  app.stage.addChild(explosion);
  explosion.play();
}
