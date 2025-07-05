import { useEffect } from "react";

interface HouseZoneProps {
  pos: { x: number; y: number };
  onEnter: () => void;
  onExit: () => void;
}

const HOUSE_AREA = {
  x: 19,
  y: 19,
};

export default function HouseZone({ pos, onEnter, onExit }: HouseZoneProps) {
  const newPosX = pos.x / 16;
  const newPosY = pos.y / 16;

  useEffect(() => {
    const isInHouse = newPosX === HOUSE_AREA.x && newPosY === HOUSE_AREA.y;

    if (isInHouse) {
      onEnter();
    } else {
      onExit();
    }
  }, [pos]);

  return null;
}
