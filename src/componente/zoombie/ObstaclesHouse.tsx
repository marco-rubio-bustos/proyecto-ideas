import { generarRectangulo } from "./utils/ShapeGenerators";
import { getObstacles } from "./utils/GetObstacles";

interface DateProps {
  live: number;
  speed: number;
}

const POSITION = "0 -1";
const POINT = 0;
const ZINDEX = true;

export const obstaclesHouseData = ({ speed, live }: DateProps) => {
  const base = getObstacles({
    speed,
    live,
    position: POSITION,
    point: POINT,
    zIndex: ZINDEX,
  });

  const rect1 = generarRectangulo(19, 19, 19, 19);

  const todasCoords = [...rect1];

  return todasCoords.map(([x, y], index) => ({
    ...base,
    id: index,
    x: x * speed,
    y: y * speed,
  }));
};
