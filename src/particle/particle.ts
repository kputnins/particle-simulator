import type { Vector2D } from '../math';

export interface Particle {
  radius: number;
  diameter: number;
  area: number;
  position: Vector2D;
  velocity: Vector2D;
  color: string;
}
