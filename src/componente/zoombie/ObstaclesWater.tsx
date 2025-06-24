import { generarRectangulo } from "./utils/ShapeGenerators";
import { getObstacles } from "./utils/GetObstacles";

interface DateProps {
  live: number;
  speed: number;
}

const POSITION = "0 -169px";
const POINT = 10;
const ZINDEX = false;

export const obstaclesWaterData = ({speed, live}:DateProps) => {
  const base = getObstacles({ speed, live, position: POSITION, point: POINT, zIndex: ZINDEX });

  const rect2 = generarRectangulo(6, 2, 8, 2);
  const rect1 = generarRectangulo(5, 5, 10, 3);
  const rect3 = generarRectangulo(6, 6, 9, 6);
  const rect4 = generarRectangulo(7, 7, 15, 7);
  const rect5 = generarRectangulo(12, 8, 16, 8);
  const rect6 = generarRectangulo(16, 9, 17, 9);
  const rect7 = generarRectangulo(17, 10, 17, 12);
  const rect8 = generarRectangulo(12, 12, 16, 12);
  const rect9 = generarRectangulo(12, 14, 12, 13);
  const rect10 = generarRectangulo(8, 15, 12, 15);
  const rect11 = generarRectangulo(7, 16, 9, 16);
  const rect12 = generarRectangulo(7, 17, 7, 20);
  const rect13 = generarRectangulo(8, 24, 8, 20);
  const rect14 = generarRectangulo(9, 23, 9, 26);
  const rect15 = generarRectangulo(10, 26, 10, 30);
  const rect16 = generarRectangulo(11, 30, 14, 30);
  const rect17 = generarRectangulo(13, 31, 17, 31);
  const rect18 = generarRectangulo(16, 32, 22, 32);
  const rect19 = generarRectangulo(23, 32, 23, 35);
  const rect20 = generarRectangulo(25, 30, 31, 30);
  const rect21 = generarRectangulo(24, 31, 32, 36);
  const rect22 = generarRectangulo(25, 37, 31, 37);
  const rect23 = generarRectangulo(33, 32, 33, 35);
  const rect24 = generarRectangulo(34, 33, 34, 34);
  const rect25 = generarRectangulo(35, 26, 35, 34);
  const rect26 = generarRectangulo(36, 24, 36, 27);

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
    ...rect10,
    ...rect11,
    ...rect12,
    ...rect13,
    ...rect14,
    ...rect15,
    ...rect16,
    ...rect17,
    ...rect18,
    ...rect19,
    ...rect20,
    ...rect21,
    ...rect22,
    ...rect23,
    ...rect24,
    ...rect25,
    ...rect26,
  ];

  return todasCoords.map(([x, y], index) => ({
    ...base,
    id: index,
    x: x * speed,
    y: y * speed,
  }));
};
