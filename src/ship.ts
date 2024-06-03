import { Application, Graphics, Point } from "pixi.js";
import fireBullet from "./bullet";
import { BulletType } from "./utils/types";

export function createShip(app: Application) {
  const ship = new Graphics();
  ship.lineTo(50, 25);
  ship.lineTo(0, 50);
  ship.lineTo(0, 0);
  ship.stroke({ width: 1, color: "0xffffff" });

  ship.position.set(app.screen.width / 2, app.screen.height / 2);
  ship.pivot.set(16.66, 25); // centroid

  app.stage.addChild(ship);

  return ship;
}

let maxSpeed = 3;
let dx = 0;
let dy = 0;
let lastShot = new Date().getTime();

export function resetShipData() {
  maxSpeed = 3;
  dx = 0;
  dy = 0;
  lastShot = new Date().getTime();
}

export function animateShip(
  app: Application,
  ship: Graphics,
  keyFlags: Map<string, boolean>,
  bullets: BulletType[]
) {
  if (ship.visible === false) {
    return;
  }

  if (keyFlags.get("ArrowUp") || keyFlags.get("w")) {
    dx += 0.05 * Math.cos(ship.rotation);
    dy += 0.05 * Math.sin(ship.rotation);
    if (dx > maxSpeed) dx = maxSpeed;
    if (dy > maxSpeed) dy = maxSpeed;
    if (dx < -maxSpeed) dx = -maxSpeed;
    if (dy < -maxSpeed) dy = -maxSpeed;
  } else {
    dx *= 0.99;
    dy *= 0.99;
  }
  if (keyFlags.get("ArrowLeft") || keyFlags.get("a")) {
    ship.rotation -= 0.02;
  }
  if (keyFlags.get("ArrowRight") || keyFlags.get("d")) {
    ship.rotation += 0.02;
  }
  if (keyFlags.get("ArrowDown") || keyFlags.get("s")) {
    // TODO: wormhole
  }
  ship.rotation %= Math.PI * 2;

  ship.position.x += dx;
  ship.position.y += dy;

  if (ship.position.x > app.screen.width + 25) {
    ship.position.x = -25;
  }
  if (ship.position.x < -25) {
    ship.position.x = app.screen.width + 25;
  }
  if (ship.position.y > app.screen.height + 25) {
    ship.position.y = -25;
  }
  if (ship.position.y < -25) {
    ship.position.y = app.screen.height + 25;
  }

  if (keyFlags.get(" ")) {
    if (new Date().getTime() - lastShot > 300) {
      lastShot = new Date().getTime();

      const pos = new Point(ship.height, ship.width / 2);

      fireBullet(app, ship.toGlobal(pos), ship.rotation, bullets);
    }
  }
}

export function destroyShip(_app: Application, ship: Graphics) {
  ship.visible = false;

  // setTimeout(() => {
  //   ship.visible = true;
  //   dx = 0;
  //   dy = 0;
  //   ship.position.set(app.screen.width / 2, app.screen.height / 2);
  //   ship.rotation = 0;
  // }, 3000);
}
