import { Application, Sprite } from "pixi.js";
import { AsteroidType } from "./utils/types";

let count = 5; // Initial number of asteroids

const bigAsteroids = 4;
const medAsteroids = 2;
const smallAsteroids = 2;
const asteroidSizes = ["big", "med", "small"];
const asteroidColors = ["Grey", "Brown"];

let baseSpeed = 0.8;

export function incAsteroidCount() {
  count++;
}

export function createAsteroids(app: Application, asteroids: AsteroidType[]) {
  for (let i = 0; i < count; i++) {
    const asteroidData = createAsteroid(0);

    const safe = 100; // Safe distance from the ship. 200/2
    const xpos = Math.random() * (app.screen.width / 2 - safe);
    const ypos = Math.random() * (app.screen.height / 2 - safe);

    asteroidData.asteroid.position.set(
      Math.random() > 0.5 ? xpos + app.screen.width / 2 + safe : xpos,
      Math.random() > 0.5 ? ypos + app.screen.height / 2 + safe : ypos
    );

    app.stage.addChild(asteroidData.asteroid);
    asteroids.push(asteroidData);
  }
}

function createAsteroid(size: number, color?: string) {
  let asteroidColor = color
    ? color
    : asteroidColors[Math.floor(Math.random() * 2)];
  let asteroidSize = asteroidSizes[size];

  let type: number;
  if (size == 0) {
    type = Math.floor(Math.random() * bigAsteroids);
  } else if (size == 1) {
    type = Math.floor(Math.random() * medAsteroids);
  } else {
    type = Math.floor(Math.random() * smallAsteroids);
  }
  const asteroid = Sprite.from(
    `meteor${asteroidColor}_${asteroidSize}${type + 1}`
  );
  asteroid.anchor.set(0.5);
  asteroid.rotation = Math.random() * Math.PI * 2;

  let heading = Math.random() * Math.PI * 2;
  let spin = Math.random() * 0.01 - 0.005;

  if (matchMedia("(max-width: 600px)").matches) {
    asteroid.scale.set(0.5);
    baseSpeed = 0.4;
  }

  return {
    asteroid,
    size,
    heading: heading,
    spin: spin,
    color: asteroidColor,
  };
}

export function animateAsteroids(app: Application, asteroids: AsteroidType[]) {
  for (let i = 0; i < asteroids.length; i++) {
    const asteroid = asteroids[i].asteroid;
    const heading = asteroids[i].heading;
    const speed = baseSpeed + asteroids[i].size * 1.2;
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

    asteroid.rotation += asteroids[i].spin % (Math.PI * 2);
  }
}

export function splitAsteroid(
  app: Application,
  asteroids: AsteroidType[],
  index: number
) {
  const asteroid = asteroids[index].asteroid;
  const size = asteroids[index].size;
  const color = asteroids[index].color;

  const pos = { x: asteroid.position.x, y: asteroid.position.y };
  const dir = [0, Math.PI];
  let heading = Math.random() * Math.PI * 2;
  if (size < asteroidSizes.length - 1) {
    for (let i = 0; i < 2; i++) {
      const newAsteroidData = createAsteroid(size + 1, color);
      newAsteroidData.heading = heading + dir[i];

      newAsteroidData.asteroid.position.set(pos.x, pos.y);

      app.stage.addChild(newAsteroidData.asteroid);
      asteroids.push(newAsteroidData);
    }
  }

  app.stage.removeChild(asteroid);
  asteroids.splice(index, 1);
}
