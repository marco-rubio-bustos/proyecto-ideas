import { useEffect, useState } from "react";
import pixel from "./img/pixel.svg";

interface DateProps {
  speed: number;
  pos: { x: number; y: number };
  onMove: (dx: number, dy: number) => void;
}
const FRAME_X = 0;
const FRAME_Y = 0;

export default function Player({ speed, pos, onMove }: DateProps) {
  const [dir, setDir] = useState(1);

  useEffect(() => {
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
  }, [onMove, speed]);

  return (
    <div
      style={{
        position: "absolute",
        width: "1rem",
        height: "1rem",
        backgroundImage: `url(${pixel})`,
        backgroundPosition: `${FRAME_X}px ${FRAME_Y}px`,
        backgroundRepeat: "no-repeat",
        imageRendering: "pixelated",
        transform: `translate(${pos.x}px, ${pos.y}px) scaleX(${dir})`,
        backgroundSize: "152px 118px",
      }}
    />
  );
}
