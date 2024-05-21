import { Graphics } from "pixi.js";

export type AsteroidType = {
  asteroid: Graphics;
  size: number;
  heading: number;
};

export type BulletType = {
  bullet: Graphics;
  enemy: boolean;
};
