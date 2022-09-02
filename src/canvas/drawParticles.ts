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
    brush.beginPath();
    brush.arc(
      particle.position.x,
      particle.position.y,
      particle.radius,
      0,
      2 * Math.PI,
      true,
    );
    // brush.stroke();

    brush.closePath();
    brush.fill();

    // brush.fillRect(
    //   particle.position.x,
    //   particle.position.y,
    //   particle.diameter,
    //   particle.diameter,
    // );
  });
  brush.restore();
};
