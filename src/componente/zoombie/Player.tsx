import { useEffect, useState } from "react";
import pixel from "./img/pixel.svg";

interface DateProps {
  speed: number;
  pos: { x: number; y: number };
  onMove: (dx: number, dy: number) => void;
  isGameOver: boolean;
  selectedPlayer: number;
}
const FRAME_Y = 0;

export default function Player({
  speed,
  pos,
  onMove,
  isGameOver,
  selectedPlayer,
}: DateProps) {
  const [dir, setDir] = useState(1);

  let frameX;
  switch (selectedPlayer) {
    case 0:
      frameX = 0;
      break;
    case 1:
      frameX = -34;
      break;
    case 2:
      frameX = -68;
      break;
    case 3:
      frameX = -102;
      break;
    case 4:
      frameX = -136;
      break;
    default:
      break;
  }

  useEffect(() => {
    if (isGameOver) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowUp":
          onMove(0, -speed);
          break;
        case "ArrowDown":
          onMove(0, speed);
          break;
        case "ArrowLeft":
          onMove(-speed, 0);
          setDir(1);
          break;
        case "ArrowRight":
          onMove(speed, 0);
          setDir(-1);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onMove, speed, isGameOver]);

  return (
    <div
      style={{
        position: "absolute",
        width: "1rem",
        height: "1rem",
        backgroundImage: `url(${pixel})`,
        backgroundPosition: `${frameX}px ${FRAME_Y}px`,
        backgroundRepeat: "no-repeat",
        imageRendering: "pixelated",
        transform: `translate(${pos.x}px, ${pos.y}px) scaleX(${dir})`,
        backgroundSize: "175px 118px",
        zIndex: 0,
      }}
    />
  );
}
