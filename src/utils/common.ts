import { Container, Point } from "pixi.js";

function distanceBetween(obj1: Point, obj2: Point) {
  return Math.sqrt(Math.pow(obj1.x - obj2.x, 2) + Math.pow(obj1.y - obj2.y, 2));
}

export function collisionCheck(obj1: Container, obj2: Container) {
  // circle collision. find midpoint of both objects and check if dist less than radius sum
  const obj1Pos = obj1.getGlobalPosition();
  const obj2Pos = obj2.getGlobalPosition();
  const obj1Radius = obj1.height / 2;
  const obj2Radius = obj2.height / 2;
  const dist = distanceBetween(obj1Pos, obj2Pos);
  return dist < obj1Radius + obj2Radius;
}
