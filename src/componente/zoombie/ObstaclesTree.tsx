import pixel from "./img/pixel.png";

export const obstaclesTreeData = (speed: number, live_tree: number) => [
  {
    id: 0,
    x: speed * 2,
    y: speed * 3,
    width: speed,
    height: speed,
    live: live_tree, // 100 0.9
    opacity: 1,
    background: "20, 147, 12",
    backgroundImage: `url(${pixel})`,
    point: 20,
    backgroundPosition: "-74px -143px",
  },
  {
    id: 1,
    x: speed * 2,
    y: speed * 4,
    width: speed,
    height: speed,
    live: live_tree, //300 0.967
    opacity: 1,
    background: "20, 147, 12",
    backgroundImage: `url(${pixel})`,
    point: 20,
    backgroundPosition: "-74px -143px",
  },
  {
    id: 2,
    x: speed * 2,
    y: speed * 5,
    width: speed,
    height: speed,
    live: live_tree, // 50 0.8
    opacity: 1,
    background: "20, 147, 12",
    backgroundImage: `url(${pixel})`,
    point: 20,
    backgroundPosition: "-74px -143px",
  },
  // Puedes seguir agregando más...
];
