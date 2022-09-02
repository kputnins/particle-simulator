import { CANVAS_ID } from '../constants';

export const getCanvasElement = (): HTMLCanvasElement | null =>
  (document.getElementById(CANVAS_ID) as HTMLCanvasElement) || null;
