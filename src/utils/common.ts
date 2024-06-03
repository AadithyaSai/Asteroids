import { Application, Container, Graphics, Point } from "pixi.js";

export function collisionCheck(obj1: Container, obj2: Container) {
  return (
    obj1.x < obj2.x + obj2.width &&
    obj1.x + obj1.width > obj2.x &&
    obj1.y < obj2.y + obj2.height &&
    obj1.y + obj1.height > obj2.y
  );
}

export function explode(app: Application, pos: Point) {
  // shades of orange n red
  const explosionColors = [0xff0000, 0xffa500, 0xff4500, 0xff6347, 0xff7f50];
  const explosion = new Container();
  app.stage.addChild(explosion);

  const particles = 20;
  for (let i = 0; i < particles; i++) {
    const particle = new Container();
    explosion.addChild(particle);

    let size = Math.random() * 5 + 2;
    const speed = Math.random() * 3 + 1;
    const angle = Math.random() * Math.PI * 2;

    particle.position.set(pos.x, pos.y);
    const velocity = new Point(
      speed * Math.cos(angle),
      speed * Math.sin(angle)
    );

    const gfx = new Graphics();
    gfx.circle(0, 0, size);
    gfx.fill(
      explosionColors[Math.floor(Math.random() * explosionColors.length)]
    );
    particle.addChild(gfx);

    app.ticker.add(() => {
      if (explosion.children.length === 0) {
        app.stage.removeChild(explosion);
      }
      particle.position.x += velocity.x;
      particle.position.y += velocity.y;
      size -= 0.1;
      gfx.scale.set(size / 5);

      if (size <= 0) {
        explosion.removeChild(particle);
      }
    });
  }
}
