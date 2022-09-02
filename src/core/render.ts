import { drawBackground, drawParticles } from '../canvas';
import { BACKGROUND_COLOR } from '../constants';
import { Particle, updateParticles } from '../particle';

export interface AnimateFrameParams {
  brush: CanvasRenderingContext2D;
  width: number;
  height: number;
  particles: Particle[];
}

export const render = ({
  brush,
  width,
  height,
  particles,
}: AnimateFrameParams): void => {
  updateParticles({ particles, width, height });

  drawBackground({ brush, width, height, color: BACKGROUND_COLOR });
  drawParticles({ brush, particles });

  requestAnimationFrame(() => render({ brush, width, height, particles }));
};
