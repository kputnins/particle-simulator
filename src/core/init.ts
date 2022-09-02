import { initCanvas } from '../canvas';
import { createParticle, Particle } from '../particle';
import { render } from './render';

export const init = () => {
  const { canvas, brush, width, height } = initCanvas();

  canvas.width = width;
  canvas.height = height;

  const particles: Particle[] = [];
  for (let i = 0; i < 20; i++) {
    particles.push(
      createParticle({
        maxX: width,
        maxY: height,
        maxVelocityX: 1,
        maxVelocityY: 1,
        minDiameter: 2,
        maxDiameter: 100,
      }),
    );
  }

  render({ brush, width, height, particles });
};
