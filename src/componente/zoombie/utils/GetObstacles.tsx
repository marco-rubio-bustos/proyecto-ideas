import pixel from "../img/pixel.svg";
interface DateProps {
  live: number;
  speed: number;
  position: string;
  point: number;
  zIndex: boolean;
}

export const getObstacles = ({ speed, live, position, point, zIndex }: DateProps) => {
  return {
    x: speed,
    y: speed,
    width: speed,
    height: speed,
    live: live,
    opacity: 1,
    backgroundColor: "130, 130, 130",
    backgroundImage: `url(${pixel})`,
    imageRendering: "pixelated",
    point: point,
    backgroundPosition: position,
    zIndex: zIndex,
  };
};
