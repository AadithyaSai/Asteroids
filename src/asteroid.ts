import { Application, Graphics } from "pixi.js";
import { AsteroidType } from "./utils/types";

let count = 5; // Initial number of asteroids

export function incAsteroidCount() {
  count++;
}

export function createAsteroids(app: Application, asteroids: AsteroidType[]) {
  for (let i = 0; i < count; i++) {
    const asteroid = createAsteroid(4);

    asteroid.position.set(
      Math.random() * app.screen.width,
      Math.random() * app.screen.height
    );

    asteroid.rotation = Math.random() * Math.PI * 2;

    let heading = Math.random() * Math.PI * 2;

    app.stage.addChild(asteroid);
    asteroids.push({ asteroid, size: 4, heading: heading });
  }
}

function createAsteroid(scale: number) {
  const asteroid = new Graphics();
  asteroid.poly([-5, -5, 5, -5, 5, 5, -5, 5]);
  asteroid.closePath();
  asteroid.fill("0xffffff");
  asteroid.stroke({ width: 1 / scale, color: "0xffffff" });
  asteroid.scale.set(scale);

  return asteroid;
}

export function animateAsteroids(app: Application, asteroids: AsteroidType[]) {
  for (let i = 0; i < asteroids.length; i++) {
    const asteroid = asteroids[i].asteroid;
    const heading = asteroids[i].heading;
    const speed = 2 / asteroids[i].size;
    asteroid.position.x += speed * Math.cos(heading);
    asteroid.position.y += speed * Math.sin(heading);

    if (asteroid.position.x > app.screen.width + 5) {
      asteroid.position.x = -5;
    }
    if (asteroid.position.x < -5) {
      asteroid.position.x = app.screen.width + 5;
    }
    if (asteroid.position.y > app.screen.height + 5) {
      asteroid.position.y = -5;
    }
    if (asteroid.position.y < -5) {
      asteroid.position.y = app.screen.height + 5;
    }
  }
}

export function splitAsteroid(
  app: Application,
  asteroids: AsteroidType[],
  index: number
) {
  const asteroid = asteroids[index].asteroid;
  const size = asteroids[index].size;

  const dir = [0, Math.PI];
  let heading = Math.random() * Math.PI * 2;
  if (size > 1) {
    for (let i = 0; i < 2; i++) {
      const newAsteroid = createAsteroid(size / 2);

      newAsteroid.position.set(asteroid.position.x, asteroid.position.y);
      newAsteroid.rotation = Math.random() * Math.PI * 2;

      app.stage.addChild(newAsteroid);
      asteroids.push({
        asteroid: newAsteroid,
        size: size / 2,
        heading: heading + dir[i],
      });
    }
  }

  app.stage.removeChild(asteroid);
  asteroids.splice(index, 1);
}
