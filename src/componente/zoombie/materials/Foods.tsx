import { useEffect, useState } from "react";

interface DateProps {
  score: number;
  getGameOver: (amount: boolean) => void;
  isReboot: number;
}

export default function Foods({ score, getGameOver, isReboot }: DateProps) {
  const VALOR_INITIAL = 100000;
  const [food, setFood] = useState(VALOR_INITIAL);
  const [hasGameOverTriggered, setHasGameOverTriggered] = useState(false);

  useEffect(() => {
    setFood((prev) => prev + score);
  }, [score]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFood((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (food <= 0 && !hasGameOverTriggered) {
      getGameOver(false);
      setHasGameOverTriggered(true);
    }
  }, [food, getGameOver]);

  useEffect(() => {
    if (isReboot > 0) {
      setFood(VALOR_INITIAL);
      setHasGameOverTriggered(false);
    }
  }, [isReboot]);

  return (
    <div className="score">
      <div
        style={{
          position: "relative",
          width: "1rem",
          height: "1rem",
          backgroundColor: "green",
        }}
      ></div>
      <p>{food}</p>
    </div>
  );
}
