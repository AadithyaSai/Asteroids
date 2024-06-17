import { Sprite } from "pixi.js";

export type AsteroidType = {
  asteroid: Sprite;
  size: number;
  heading: number;
  spin: number;
  color: string;
};

export type BulletType = {
  bullet: Sprite;
  enemy: boolean;
};

export type GameStateUpdate = {
  score: number;
  lives: number;
  killed: boolean;
};
