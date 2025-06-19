// MapGame.tsx
import { useState } from "react";
import Player from "./Player";
import Collision from "./Obstacle";
import { getCollidingObstacle } from "./utils/Collision";
import { obstaclesRockData } from "./ObstaclesRock";
import { obstaclesTreeData } from "./ObstaclesTree";
import { obstaclesWaterData } from "./ObstaclesWater";

const REM = 40;
const SPEED = 16;
const MAP_SIZE = REM * SPEED; // 640px
const LIVE_TREE = 100;
const LIVE_ROCK = 300;
const LIVE_WATER = 50;

export default function MapGame() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [obstaclesRock, setObstaclesRock] = useState(
    obstaclesRockData(SPEED, LIVE_ROCK)
  );
  const [obstaclesTree, setObstaclesTree] = useState(
    obstaclesTreeData(SPEED, LIVE_TREE)
  );
  const [obstaclesWater, setObstaclesWater] = useState(
    obstaclesWaterData(SPEED, LIVE_WATER)
  );

  const handleMove = (dx: number, dy: number) => {
    let newX = pos.x + dx;
    let newY = pos.y + dy;

    newX = Math.max(0, Math.min(newX, MAP_SIZE - SPEED));
    newY = Math.max(0, Math.min(newY, MAP_SIZE - SPEED));

    const allObstacles = [
      { list: obstaclesRock, setter: setObstaclesRock },
      { list: obstaclesTree, setter: setObstaclesTree },
      { list: obstaclesWater, setter: setObstaclesWater },
      // más tipos aquí...
    ];

    // colisiones
    for (const { list, setter } of allObstacles) {
      const hit = getCollidingObstacle(list, newX, newY, SPEED);
      if (hit) {
        setter((prev) =>
          prev
            .map((ob) =>
              ob.id === hit.id
                ? {
                    ...ob,
                    live: ob.live - 10,
                    opacity: ob.opacity - 10 / ob.live,
                  }
                : ob
            )
            .filter((ob) => ob.live > 0)
        );
        return;
      }
    }

    setPos({ x: newX, y: newY });
  };

  return (
    <div
      style={{
        position: "relative",
        width: `${REM}rem`,
        height: `${REM}rem`,
        background: "#eee",
      }}
    >
      <Player speed={SPEED} pos={pos} onMove={handleMove} />
      <Collision obstacles={obstaclesRock} />
      <Collision obstacles={obstaclesTree} />
      <Collision obstacles={obstaclesWater} />
    </div>
  );
}
