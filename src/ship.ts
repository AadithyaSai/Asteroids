import { Application, Point, Sprite } from "pixi.js";
import fireBullet from "./bullet";
import { BulletType } from "./utils/types";
import { sound } from "@pixi/sound";

let invulnerable = false;
let maxSpeed = 5;
let dx = 0;
let dy = 0;
let lastShot = new Date().getTime();

export function resetShipData() {
  maxSpeed = 5;
  dx = 0;
  dy = 0;
  lastShot = new Date().getTime();
}
export function isInvulnerable() {
  return invulnerable;
}

export function setInvulnerable(ship: Sprite, sec: number) {
  invulnerable = true;
  const blink = setInterval(() => {
    ship.alpha = ship.alpha === 1 ? 0.5 : 1;
  }, 200);
  setTimeout(() => {
    invulnerable = false;
    clearInterval(blink);
    ship.alpha = 1;
  }, sec * sec * 1000);
}

export function createShip(app: Application) {
  const ship = Sprite.from("ship");

  ship.position.set(app.screen.width / 2, app.screen.height / 2);
  ship.anchor.set(0.5);

  const shipTrail = Sprite.from("shiptrail");
  shipTrail.anchor.set(0.5);
  shipTrail.position.set(-ship.width / 2 - 10, 0);
  shipTrail.visible = false;
  ship.addChild(shipTrail);

  if (matchMedia("(max-width: 600px)").matches) {
    ship.scale.set(0.5);
    maxSpeed = 2.5;
  }

  app.stage.addChild(ship);

  return ship;
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
    dx += 0.1 * Math.cos(ship.rotation);
    dy += 0.1 * Math.sin(ship.rotation);
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
    ship.rotation -= 0.03;
  }
  if (keyFlags.get("ArrowRight") || keyFlags.get("d")) {
    ship.rotation += 0.03;
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

export function destroyShip(ship: Sprite) {
  ship.visible = false;
  sound.play("shipExplosion");
}
