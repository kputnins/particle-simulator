import { Vector2D } from '../math';
import { generateRandomColor } from '../utils';
import type { Particle } from './particle';

const rotate = (velocity: Vector2D, theta: number): Vector2D => {
  return {
    x: velocity.x * Math.cos(theta) - velocity.y * Math.sin(theta),
    y: velocity.x * Math.sin(theta) + velocity.y * Math.cos(theta),
  };
};

interface CollideWithParticlesParams {
  particles: Particle[];
  particleOne: Particle;
  startIndex: number;
}

export const collideWithParticles = ({
  particles,
  particleOne,
  startIndex,
}: CollideWithParticlesParams): void => {
  for (let i = startIndex + 1; i < particles.length; i++) {
    const particleTwo = particles[i];

    const dx = particleOne.position.x - particleTwo.position.x;
    const dy = particleOne.position.y - particleTwo.position.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < particleOne.radius + particleTwo.radius) {
      const resultingVelocity = [
        particleOne.velocity.x - particleTwo.velocity.x,
        particleOne.velocity.y - particleTwo.velocity.y,
      ];

      if (
        resultingVelocity[0] *
          (particleTwo.position.x - particleOne.position.x) +
          resultingVelocity[1] *
            (particleTwo.position.y - particleOne.position.y) >=
        0
      ) {
        particleOne.color = generateRandomColor();
        particleTwo.color = generateRandomColor();

        const massOne = particleOne.area;
        const massTwo = particleTwo.area;
        const theta = -Math.atan2(
          particleTwo.position.y - particleOne.position.y,
          particleTwo.position.x - particleOne.position.x,
        );
        const velocityOne = rotate(particleOne.velocity, theta);
        const velocityTwo = rotate(particleTwo.velocity, theta);
        const uOne = rotate(
          {
            x:
              (velocityOne.x * (massOne - massTwo)) / (massOne + massTwo) +
              (velocityTwo.x * 2 * massTwo) / (massOne + massTwo),
            y: velocityOne.y,
          },
          -theta,
        );
        const uTwo = rotate(
          {
            x:
              (velocityTwo.x * (massTwo - massOne)) / (massOne + massTwo) +
              (velocityOne.x * 2 * massOne) / (massOne + massTwo),
            y: velocityTwo.y,
          },
          -theta,
        );

        particleOne.velocity.x = uOne.x;
        particleOne.velocity.y = uOne.y;
        particleTwo.velocity.x = uTwo.x;
        particleTwo.velocity.y = uTwo.y;
      }
    }
  }
};
