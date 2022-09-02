import type { Particle } from '../particle';

export interface DrawParticlesParams {
  brush: CanvasRenderingContext2D;
  particles: Particle[];
}

export const drawParticles = ({
  brush,
  particles,
}: DrawParticlesParams): void => {
  brush.save();

  particles.forEach((particle) => {
    brush.fillStyle = particle.color;
    brush.fillRect(
      particle.position.x,
      particle.position.y,
      particle.size,
      particle.size,
    );
  });
  brush.restore();
};
