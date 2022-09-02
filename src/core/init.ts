import { initCanvas } from '../canvas';
import { createParticle, Particle } from '../particle';
import { render } from './render';

export const init = () => {
  const { canvas, brush, width, height } = initCanvas();

  canvas.width = width;
  canvas.height = height;

  const particles: Particle[] = [];
  for (let i = 0; i < 100; i++) {
    particles.push(
      createParticle({
        maxX: width,
        maxY: height,
        maxVelocityX: 2,
        maxVelocityY: 2,
      }),
    );
  }

  render({ brush, width, height, particles });
};
