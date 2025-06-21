import pixel from "../img/pixel.svg";
interface DateProps {
  live: number;
  speed: number;
  position: string;
  point: number
}

export const getObstacles = ({ speed, live, position, point}: DateProps) => {
  return {
    x: speed,
    y: speed,
    width: speed,
    height: speed,
    live: live,
    opacity: 1,
    background: "130, 130, 130",
    backgroundImage: `url(${pixel})`,
    imageRendering: "pixelated",
    point: point,
    backgroundPosition: `${position}`,
  };
};