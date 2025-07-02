import { generarRectangulo } from "./utils/ShapeGenerators";
import { getObstacles } from "./utils/GetObstacles";

interface DateProps {
  live: number;
  speed: number;
}

const POSITION = "-318px -204px";
const SIZE = "350px 236px";
const POINT = 0;
const WIDTH = 32;
const HEIGHT = 32;
const ZINDEX = true;

export const obstaclesHouseData = ({ speed, live }: DateProps) => {
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

  const rect1 = generarRectangulo(19, 18, 19, 18);

  const todasCoords = [...rect1];

  return todasCoords.map(([x, y], index) => ({
    ...base,
    id: index,
    x: x * speed,
    y: y * speed,
  }));
};
