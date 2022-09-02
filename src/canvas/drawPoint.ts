export interface DrawPointParams {
  brush: CanvasRenderingContext2D;
  color: string;
  size: number;
  posX: number;
  posY: number;
}

export const drawPoint = ({
  brush,
  color,
  size,
  posX,
  posY,
}: DrawPointParams): void => {
  brush.save();
  brush.fillStyle = color;
  brush.fillRect(posX, posY, size, size);
  brush.restore();
};
