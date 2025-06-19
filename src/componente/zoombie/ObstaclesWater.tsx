

export const obstaclesWaterData = (speed: number, live_water: number) => [
  {
    id: 0,
    x: speed * 3,
    y: speed * 3,
    width: speed,
    height: speed,
    live: live_water, // 100 0.9
    opacity: 1,
    background: "38, 102, 224",
  },
  {
    id: 1,
    x: speed * 3,
    y: speed * 4,
    width: speed,
    height: speed,
    live: live_water, //300 0.967
    opacity: 1,
    background: "38, 102, 224",
  },
  {
    id: 2,
    x: speed * 3,
    y: speed * 5,
    width: speed,
    height: speed,
    live: live_water, // 50 0.8
    opacity: 1,
    background: "38, 102, 224",
  },
  // Puedes seguir agregando más...
];
