import { useState, useEffect } from "react";
import Player from "./Player";
import Collision from "./Obstacle";
import Materials from "./materials/Materials";
import Foods from "./materials/Foods";
import { getCollidingObstacle } from "./utils/Collision";
import { obstaclesRockData } from "./ObstaclesRock";
import { obstaclesTreeData } from "./ObstaclesTree";
import { obstaclesWaterData } from "./ObstaclesWater";
import { obstaclesBaseData } from "./ObstaclesBase";
import { useObstacles } from "./hook/useObstacles";
import "./css/score.css";

const REM = 40;
const SPEED = 16;
const MAP_SIZE = REM * SPEED;

const LIVE = {
  ROCK: 1500,
  TREE: 1000,
  WATER: 600,
  BASE: 0,
};

type Obstacle = {
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;
  live: number;
  opacity: number;
  point: number;
  background: string;
  backgroundImage?: string;
  backgroundPosition?: string;
};

export default function MapGame() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [scores, setScores] = useState({ rock: 0, tree: 0, water: 0 });

  const [obstaclesRock, setObstaclesRock] = useObstacles(obstaclesRockData, SPEED, LIVE.ROCK);
  const [obstaclesTree, setObstaclesTree] = useObstacles(obstaclesTreeData, SPEED, LIVE.TREE);
  const [obstaclesWater, setObstaclesWater] = useObstacles(obstaclesWaterData, SPEED, LIVE.WATER);
  const [obstaclesBase] = useObstacles(obstaclesBaseData, SPEED, LIVE.BASE);

  const handleMove = (dx: number, dy: number) => {
    let newX = Math.max(0, Math.min(pos.x + dx, MAP_SIZE - SPEED));
    let newY = Math.max(0, Math.min(pos.y + dy, MAP_SIZE - SPEED));

    const allObstacles = [
      { type: "rock", list: obstaclesRock, setter: setObstaclesRock },
      { type: "tree", list: obstaclesTree, setter: setObstaclesTree },
      { type: "water", list: obstaclesWater, setter: setObstaclesWater },
    ];

    for (const { type, list, setter } of allObstacles) {
      const hit = getCollidingObstacle(list, newX, newY, SPEED);
      if (hit) {
        const newLive = hit.live - 40;
        const isDestroyed = newLive <= 0;

        setter((prev) =>
          prev
            .map((ob) =>
              ob.id === hit.id
                ? { ...ob, live: newLive, opacity: ob.opacity - 10 / hit.live }
                : ob
            )
            .filter((ob) => ob.live > 0)
        );

        if (isDestroyed && type in scores) {
          setScores((prev) => ({
            ...prev,
            [type]: prev[type as keyof typeof scores] + hit.point,
          }));
        }

        return;
      }
    }

    setPos({ x: newX, y: newY });
  };

  useEffect(() => {
    const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);
    console.log("🎯 Total:", totalScore);
    console.log("🪨 Rock:", scores.rock);
    console.log("🌳 Tree:", scores.tree);
    console.log("💧 Water:", scores.water);
  }, [scores]);

    const isNearPlayer = (ob: Obstacle) =>
    Math.abs(ob.x - pos.x) < 50 && Math.abs(ob.y - pos.y) < 50;

  return (
    <>
      <div className="materials">
        <Materials score={scores.rock} />
        <Materials score={scores.tree} />
        <Materials score={scores.water} />
      </div>
      
      <div className="materials">
        <Foods score={scores.rock} />
        <Materials score={scores.tree} />
        <Materials score={scores.water} />
      </div>
      
      <div
        style={{
          position: "relative",
          width: `${REM}rem`,
          height: `${REM}rem`,
          background: "#000",
        }}
      >
        <Collision obstacles={obstaclesBase.filter(isNearPlayer)} />
        <Player speed={SPEED} pos={pos} onMove={handleMove} />
        <Collision obstacles={obstaclesRock.filter(isNearPlayer)} />
        <Collision obstacles={obstaclesTree.filter(isNearPlayer)} />
        <Collision obstacles={obstaclesWater.filter(isNearPlayer)} />
      </div>
    </>
  );
}
