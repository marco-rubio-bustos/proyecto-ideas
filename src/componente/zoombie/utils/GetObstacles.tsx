import pixel from "../img/pixel.svg";

interface DateProps {
  live: number;
  speed: number;
  width: number;
  height: number;
  position: string;
  size: string;
  point: number;
  zIndex: boolean;
}

export const getObstacles = ({
  live,
  speed,
  width,
  height,
  position,
  size,
  point,
  zIndex,
}: DateProps) => {
  return {
    x: speed,
    y: speed,
    width: width,
    height: height,
    live: live,
    opacity: 1,
    backgroundColor: "",
    backgroundImage: `url(${pixel})`,
    imageRendering: "pixelated",
    point: point,
    backgroundPosition: position,
    backgroundSize: size,
    zIndex: zIndex,
  };
};
