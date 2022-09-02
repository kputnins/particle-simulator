import { Particle } from './particle';

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
  if (particle.position.x < 0 || particle.position.x > width)
    particle.velocity.x = -particle.velocity.x;
  if (particle.position.y < 0 || particle.position.y > height)
    particle.velocity.y = -particle.velocity.y;
};
