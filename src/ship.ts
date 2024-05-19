import { Application, Graphics, pointInTriangle } from "pixi.js";
import fireBullet from "./bullet";

export function createShip(app: Application, keyFlags: Map<string, boolean>) {
  const ship = new Graphics();
  ship.lineTo(50, 25);
  ship.lineTo(0, 50);
  ship.lineTo(0, 0);
  ship.stroke({ width: 1, color: "0xffffff" });

  ship.position.set(app.screen.width / 2, app.screen.height / 2);
  ship.pivot.set(16.66, 25); // centroid

  let dx = 0;
  let dy = 0;
  let maxSpeed = 3;
  let lastShot = new Date().getTime();
  app.ticker.add(() => {
    if (keyFlags.get(" ")) {
      if (new Date().getTime() - lastShot > 300) {
        lastShot = new Date().getTime();
        let pos = {
          x: ship.position.x,
          y: ship.position.y,
        };
        fireBullet(app, pos, ship.rotation);
      }
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
      ship.rotation -= 0.05;
    }
    if (keyFlags.get("ArrowRight") || keyFlags.get("d")) {
      ship.rotation += 0.05;
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
  });

  app.stage.addChild(ship);
}
