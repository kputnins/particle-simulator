import { collideWithWalls } from './collideWithWalls';
import { updateParticlePosition } from './updateParticlePosition';
import type { Particle } from './particle';

interface UpdateParticlesParams {
  particles: Particle[];
  width: number;
  height: number;
}

export const updateParticles = ({
  particles,
  width,
  height,
}: UpdateParticlesParams): void => {
  particles.forEach((particle) => {
    collideWithWalls({ particle, width, height });
    updateParticlePosition({ particle });
  });
};
