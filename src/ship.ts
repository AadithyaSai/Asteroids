import { Application, Point, Sprite } from "pixi.js";
import fireBullet from "./bullet";
import { BulletType } from "./utils/types";
import { sound } from "@pixi/sound";

export function createShip(app: Application) {
  const ship = Sprite.from("ship");

  ship.position.set(app.screen.width / 2, app.screen.height / 2);
  ship.anchor.set(0.5);

  const shipTrail = Sprite.from("shiptrail");
  shipTrail.anchor.set(0.5);
  shipTrail.position.set(-ship.width / 2 - 10, 0);
  shipTrail.visible = false;
  ship.addChild(shipTrail);

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
  ship: Sprite,
  keyFlags: Map<string, boolean>,
  bullets: BulletType[]
) {
  if (ship.visible === false) {
    return;
  }

  if (keyFlags.get("ArrowUp") || keyFlags.get("w")) {
    sound.play("thrust");
    ship.children[0].visible = true;
    dx += 0.05 * Math.cos(ship.rotation);
    dy += 0.05 * Math.sin(ship.rotation);
    if (dx > maxSpeed) dx = maxSpeed;
    if (dy > maxSpeed) dy = maxSpeed;
    if (dx < -maxSpeed) dx = -maxSpeed;
    if (dy < -maxSpeed) dy = -maxSpeed;
  } else {
    sound.stop("thrust");
    ship.children[0].visible = false;
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

  if (ship.position.x > app.screen.width + ship.width / 2) {
    ship.position.x = -ship.width / 2;
  }
  if (ship.position.x < -ship.width / 2) {
    ship.position.x = app.screen.width + ship.width / 2;
  }
  if (ship.position.y > app.screen.height + ship.height / 2) {
    ship.position.y = -ship.height / 2;
  }
  if (ship.position.y < -ship.height / 2) {
    ship.position.y = app.screen.height + ship.height / 2;
  }

  if (keyFlags.get(" ")) {
    if (new Date().getTime() - lastShot > 300) {
      lastShot = new Date().getTime();

      const pos = new Point(ship.width / 2, 0);

      fireBullet(app, ship.toGlobal(pos), ship.rotation, bullets);
      sound.play("shoot");
    }
  }
}

export function destroyShip(_app: Application, ship: Sprite) {
  ship.visible = false;
  sound.play("shipExplosion");

  // setTimeout(() => {
  //   ship.visible = true;
  //   dx = 0;
  //   dy = 0;
  //   ship.position.set(app.screen.width / 2, app.screen.height / 2);
  //   ship.rotation = 0;
  // }, 3000);
}
