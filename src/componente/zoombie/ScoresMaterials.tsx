import { useEffect, useState } from "react";
import { useRef as useReactRef } from "react";

interface DateProps {
  valorOpacidad?: number;
  position?: number[];
  pos: {
    x: number;
    y: number;
  };
}

export default function ScoresMaterials({
  valorOpacidad,
  position,
  pos,
}: DateProps) {
  const [showHit, setShowHit] = useState(false);
  const [showPosition, setShowPosition] = useState(position);
  const score = valorOpacidad !== undefined ? valorOpacidad.toFixed(2) : null;

  const timeoutRef = useReactRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setShowPosition(position);
    if (score) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current); // limpia anterior
      setShowHit(true);
      timeoutRef.current = setTimeout(() => setShowHit(false), 400);
    } else {
      setShowHit(false);
    }
  }, [score, position, pos.y]);

  return (
    <>
      {showPosition}px -{pos.y} -{pos.x}
      <div
        style={{
          transform: `translate(${pos.x}px, ${pos.y - 30}px)`,
          position: "relative",
        }}
        key={valorOpacidad}
        className={`${showHit ? "scoreHit" : "hide"}`}
      >
        <p>{score}</p>
      </div>
    </>
  );
}
