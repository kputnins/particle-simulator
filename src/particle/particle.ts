import { Vector2D } from '../math';

export interface Particle {
  size: number;
  position: Vector2D;
  color: string;
  velocity: Vector2D;
}
