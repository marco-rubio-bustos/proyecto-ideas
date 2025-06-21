import { useState } from "react";

export interface Obstacle {
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
}


export const useObstacles = (
  dataGenerator: (props: { speed: number; live: number }) => Obstacle[],
  speed: number,
  live: number
) => {
  const [obstacles, setObstacles] = useState<Obstacle[]>(
    dataGenerator({ speed, live })
  );
  return [obstacles, setObstacles] as const;
};
