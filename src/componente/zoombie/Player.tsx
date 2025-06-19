import { useEffect } from "react";

interface DateProps {
  speed: number;
  pos: { x: number; y: number };
  onMove: (dx: number, dy: number) => void;
}

export default function Player({ speed, pos, onMove }: DateProps) {
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
          break;
        case "ArrowRight":
          onMove(speed, 0);
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
        background: "blue",
        transform: `translate(${pos.x}px, ${pos.y}px)`,
      }}
    />
  );
}
