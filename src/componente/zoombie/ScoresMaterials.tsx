import { useEffect, useState } from "react";
import { useRef as useReactRef } from "react";

interface DateProps {
  valorOpacidad?: number;
}

export default function ScoresMaterials({ valorOpacidad }: DateProps) {
  const [showHit, setShowHit] = useState(false);
  const score = valorOpacidad !== undefined ? valorOpacidad.toFixed(2) : null;

  const timeoutRef = useReactRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (score) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current); // limpia anterior
      setShowHit(true);
      timeoutRef.current = setTimeout(() => setShowHit(false), 400);
    } else {
      setShowHit(false);
    }
  }, [score]);

  return (
    <div key={valorOpacidad} className={`${showHit ? "scoreHit" : "hide"}`}>
      <p>{score}</p>
    </div>
  );
}
