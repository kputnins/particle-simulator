import { getCanvasElement } from "./getCanvasElement";

export const initCanvas = (): {
  canvas: HTMLCanvasElement;
  brush: CanvasRenderingContext2D;
  width: number;
  height: number;
} => {
  const canvas = getCanvasElement();
  if (!canvas) throw new Error("No canvas found");

  const brush = canvas.getContext("2d");
  if (!brush) throw new Error("No context found");

  const width = window.innerWidth - 0;
  const height = window.innerHeight - 4;

  return { canvas, brush, width, height };
};