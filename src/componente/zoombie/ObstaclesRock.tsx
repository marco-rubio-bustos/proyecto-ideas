

export const obstaclesRockData = (speed: number, live_rock: number) => [
  {
    id: 0,
    x: speed * 1,
    y: speed * 1,
    width: speed,
    height: speed,
    live: live_rock, // 100 0.9
    opacity: 1,
    background: "130, 130, 130",
    point: 10,
  },
  {
    id: 1,
    x: speed * 10,
    y: speed * 13,
    width: speed,
    height: speed,
    live: live_rock, //300 0.967
    opacity: 1,
    background: "130, 130, 130",
    point: 10,
  },
  {
    id: 2,
    x: speed * 1,
    y: speed * 20,
    width: speed,
    height: speed,
    live: live_rock, // 50 0.8
    opacity: 1,
    background: "130, 130, 130",
    point: 10,
  },
  // Puedes seguir agregando más...
];
