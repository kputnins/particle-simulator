export interface DrawBackgroundParams {
  brush: CanvasRenderingContext2D;
  color: string;
  width: number;
  height: number;
}

export const drawBackground = ({
  brush,
  color,
  width,
  height,
}: DrawBackgroundParams): void => {
  brush.save();
  brush.fillStyle = color;
  brush.fillRect(0, 0, width, height);
  brush.restore();
};
