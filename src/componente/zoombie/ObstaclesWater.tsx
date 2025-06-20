import pixel from "./img/pixel.png";

export const obstaclesWaterData = (speed: number, live_water: number) => {
  const base = {
    width: speed,
    height: speed,
    live: live_water,
    opacity: 1,
    background: "38, 102, 224",
    backgroundImage: `url(${pixel})`,
    point: 30,
    backgroundPosition: "-74px -89px",
  };

  return [
    {
      ...base,
      id: 0,
      x: speed * 3,
      y: speed * 3,
    },
    {
      ...base,
      id: 1,
      x: speed * 3,
      y: speed * 4,
    },
    {
      ...base,
      id: 2,
      x: speed * 3,
      y: speed * 5,
    },
  ];
};
