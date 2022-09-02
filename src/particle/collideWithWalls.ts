import type { Particle } from './particle';

interface CollideWithWallsParams {
  particle: Particle;
  width: number;
  height: number;
}

export const collideWithWalls = ({
  particle,
  width,
  height,
}: CollideWithWallsParams): void => {
  if (
    particle.position.x - particle.radius < 0 ||
    particle.position.x + particle.radius > width
  )
    particle.velocity.x = -particle.velocity.x;
  if (
    particle.position.y - particle.radius < 0 ||
    particle.position.y + particle.radius > height
  )
    particle.velocity.y = -particle.velocity.y;
};
