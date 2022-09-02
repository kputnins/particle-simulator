import { generateRandomInteger } from '../math';

export const generateRandomColor = (): string =>
  'rgb(' +
  String(generateRandomInteger({ max: 256 })) +
  ', ' +
  String(generateRandomInteger({ max: 256 })) +
  ', ' +
  String(generateRandomInteger({ max: 256 })) +
  ')';
