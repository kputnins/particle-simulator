import { collideWithWalls } from './collideWithWalls';
import { updateParticlePosition } from './updateParticlePosition';
import type { Particle } from './particle';
import { collideWithParticles } from './collideWithParticles';

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
  particles.forEach((particle, index) => {
    collideWithWalls({ particle, width, height });
    collideWithParticles({
      particles,
      particleOne: particle,
      startIndex: index,
    });
    updateParticlePosition({ particle });
  });
};
