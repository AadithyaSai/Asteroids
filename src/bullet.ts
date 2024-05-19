import { Application, Graphics, ObservablePoint } from "pixi.js";

export default function fireBullet(
  app: Application,
  position: { x: number; y: number },
  direction: number
) {
  const bullet = new Graphics();
  bullet.circle(0, 0, 5);
  bullet.fill("0xffffff");
  bullet.position.set(position.x, position.y);
  bullet.rotation = direction;

  const speed = 5;

  app.ticker.add(() => {
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
  });

  app.stage.addChild(bullet);
}
