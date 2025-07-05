import { generarRectangulo } from "./utils/ShapeGenerators";
import { getObstacles } from "./utils/GetObstacles";

interface DateProps {
  live: number;
  speed: number;
}

const POSITION = "0 -135px";
const SIZE = "175px 118px";
const POINT = 10;
const WIDTH = 16;
const HEIGHT = 16;
const ZINDEX = false;

export const obstaclesRockData = ({ speed, live }: DateProps) => {
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

  const rect1 = generarRectangulo(1, 1, 1, 34);
  const rect2 = generarRectangulo(2, 12, 4, 33);

  const todasCoords = [...rect1, ...rect2];

  return todasCoords.map(([x, y], index) => ({
    ...base,
    id: index,
    x: x * speed,
    y: y * speed,
  }));
};
