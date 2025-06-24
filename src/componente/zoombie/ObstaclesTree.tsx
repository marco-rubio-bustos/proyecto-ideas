import { generarRectangulo } from "./utils/ShapeGenerators";
import { getObstacles } from "./utils/GetObstacles";

interface DateProps {
  live: number;
  speed: number;
}

const POSITION = "0 -152px";
const POINT = 10;
const ZINDEX = false;

export const obstaclesTreeData = ({speed, live}: DateProps) => {
  const base = getObstacles({ speed, live, position: POSITION, point: POINT, zIndex: ZINDEX });


  const rect1 = generarRectangulo(6, 0, 10, 1);
  const rect2 = generarRectangulo(11, 0, 16, 3);
  const rect3 = generarRectangulo(17, 2, 21, 4);
  const rect4 = generarRectangulo(24, 0, 31, 3);
  const rect5 = generarRectangulo(27, 4, 32, 6);
  const rect6 = generarRectangulo(2, 8, 11, 11);
  const rect7 = generarRectangulo(26, 10, 17, 12);
  const rect8 = generarRectangulo(34, 11, 37, 16);
  const rect9 = generarRectangulo(12, 5, 27, 5);


  const todasCoords = [
    ...rect1,
    ...rect2,
    ...rect3,
    ...rect4,
    ...rect5,
    ...rect6,
    ...rect7,
    ...rect8,
    ...rect9,
  ];

  return todasCoords.map(([x, y], index) => ({
    ...base,
    id: index,
    x: x * speed,
    y: y * speed,
  }));
};
