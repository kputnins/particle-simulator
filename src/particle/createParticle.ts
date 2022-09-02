import { generateRandomInteger } from '../math';
import { Particle } from './particle';

interface CreateParticleParams {
  maxX: number;
  maxY: number;
  maxVelocityX: number;
  maxVelocityY: number;
}

export const createParticle = ({
  maxX,
  maxY,
  maxVelocityX,
  maxVelocityY,
}: CreateParticleParams): Particle => ({
  position: {
    x: generateRandomInteger({ min: 0, max: maxX }),
    y: generateRandomInteger({ min: 0, max: maxY }),
  },
  color: 'white',
  velocity: {
    x: generateRandomInteger({ min: -maxVelocityX, max: maxVelocityX }),
    y: generateRandomInteger({ min: -maxVelocityY, max: maxVelocityY }),
  },
  size: 1,
});
