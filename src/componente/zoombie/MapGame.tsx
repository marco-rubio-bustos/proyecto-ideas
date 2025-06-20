// MapGame.tsx
import { useState, useEffect } from "react";
import Player from "./Player";
import Collision from "./Obstacle";
import Materials from "./materials/Materials";
import { getCollidingObstacle } from "./utils/Collision";
import { obstaclesRockData } from "./ObstaclesRock";
import { obstaclesTreeData } from "./ObstaclesTree";
import { obstaclesWaterData } from "./ObstaclesWater";
import "./css/score.css";

const REM = 40;
const SPEED = 16;
const MAP_SIZE = REM * SPEED; // 640px
const LIVE_TREE = 100;
const LIVE_ROCK = 300;
const LIVE_WATER = 50;

export default function MapGame() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [scoreRock, setScoreRock] = useState(0);
  const [scoreTree, setScoreTree] = useState(0);
  const [scoreWater, setScoreWater] = useState(0);

  const [score, setScore] = useState(0);
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
      { type: "rock", list: obstaclesRock, setter: setObstaclesRock },
      { type: "tree", list: obstaclesTree, setter: setObstaclesTree },
      { type: "water", list: obstaclesWater, setter: setObstaclesWater },
      // más tipos aquí...
    ];

    // colisiones
    for (const { type, list, setter } of allObstacles) {
      const hit = getCollidingObstacle(list, newX, newY, SPEED);
      if (hit) {
        const newLive = hit.live - 10;
        const isDestroyed = newLive <= 0;

        setter((prev) =>
          prev
            .map((ob) =>
              ob.id === hit.id
                ? {
                    ...ob,
                    live: newLive,
                    opacity: ob.opacity - 10 / hit.live,
                  }
                : ob
            )
            .filter((ob) => ob.live > 0)
        );

        if (isDestroyed) {
          console.log("💥 Objeto destruido:", hit);

          // Score general
          setScore((prev) => prev + hit.point);

          // Score por tipo
          if (type === "rock") setScoreRock((prev) => prev + hit.point);
          if (type === "tree") setScoreTree((prev) => prev + hit.point);
          if (type === "water") setScoreWater((prev) => prev + hit.point);
        }

        return;
      }
    }

    setPos({ x: newX, y: newY });
  };

  useEffect(() => {
    console.log("🎯 Score total:", score);
    console.log("🪨 Rock:", scoreRock);
    console.log("🌳 Tree:", scoreTree);
    console.log("💧 Water:", scoreWater);
  }, [score, scoreRock, scoreTree, scoreWater]);

  return (
    <>
      <div className="materials">
        <Materials score={scoreRock} />
        <Materials score={scoreTree} />
        <Materials score={scoreWater} />
      </div>
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
    </>
  );
}
