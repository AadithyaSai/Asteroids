import { Application, Graphics } from "pixi.js";
import { GlowFilter } from "pixi-filters";
import { BulletType } from "./utils/types";

// fixme: make animation independant of bullet instance

export default function fireBullet(
  app: Application,
  position: { x: number; y: number },
  direction: number,
  bullets: BulletType[]
) {
  const bullet = new Graphics();
  bullet.circle(0, 0, 2);
  bullet.fill("0xffffff");
  bullet.position.set(position.x, position.y);
  bullet.rotation = direction;

  bullet.filters = [new GlowFilter()];

  app.stage.addChild(bullet);
  bullets.push({ bullet, enemy: false });
}

export function animateBullets(app: Application, bullets: BulletType[]) {
  const speed = 5;

  for (let i = 0; i < bullets.length; i++) {
    const bullet = bullets[i].bullet;
    bullet.position.x += speed * Math.cos(bullet.rotation);
    bullet.position.y += speed * Math.sin(bullet.rotation);

    if (
      bullet.position.x < 0 ||
      bullet.position.x > app.screen.width ||
      bullet.position.y < 0 ||
      bullet.position.y > app.screen.height
    ) {
      app.stage.removeChild(bullet);
    }
  }
}
