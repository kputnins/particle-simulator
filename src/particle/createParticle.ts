import { generateRandomInteger } from '../math';
import { generateRandomColor } from '../utils';
import { Particle } from './particle';

interface CreateParticleParams {
  maxX: number;
  maxY: number;
  maxVelocityX: number;
  maxVelocityY: number;
  minDiameter: number;
  maxDiameter: number;
}

export const createParticle = ({
  maxX,
  maxY,
  maxVelocityX,
  maxVelocityY,
  minDiameter,
  maxDiameter,
}: CreateParticleParams): Particle => {
  const diameter = generateRandomInteger({
    min: minDiameter,
    max: maxDiameter,
  });
  const radius = diameter / 2;

  return {
    position: {
      x: generateRandomInteger({ min: minDiameter, max: maxX - maxDiameter }),
      y: generateRandomInteger({ min: minDiameter, max: maxY - maxDiameter }),
    },
    color: generateRandomColor(),
    velocity: {
      x: generateRandomInteger({ min: -maxVelocityX, max: maxVelocityX }),
      y: generateRandomInteger({ min: -maxVelocityY, max: maxVelocityY }),
    },
    radius,
    diameter,
    area: Math.PI * radius * radius,
  };
};
