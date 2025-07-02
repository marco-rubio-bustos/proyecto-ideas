import { generarRectangulo } from "./utils/ShapeGenerators";
import { getObstacles } from "./utils/GetObstacles";

interface DateProps {
  live: number;
  speed: number;
}

const POSITION = "0 -203px";
const SIZE = "175px 118px";
const POINT = 0;
const WIDTH = 16;
const HEIGHT = 16;
const ZINDEX = false;

export const obstaclesBaseData = ({ speed, live }: DateProps) => {
  const base = getObstacles({
    speed,
    live,
    width: WIDTH,
    height: HEIGHT,
    position: POSITION,
    size: SIZE,
    point: POINT,
    zIndex: ZINDEX,
  });

  const rect1 = generarRectangulo(0, 0, 39, 39);

  const todasCoords = [...rect1];

  return todasCoords.map(([x, y], index) => ({
    ...base,
    id: index,
    x: x * speed,
    y: y * speed,
  }));
};
