import { Particle } from './particle';

interface UpdateParticlePositionParams {
  particle: Particle;
}

export const updateParticlePosition = ({
  particle,
}: UpdateParticlePositionParams): void => {
  particle.position = {
    x: particle.position.x + particle.velocity.x,
    y: particle.position.y + particle.velocity.y,
  };
};
