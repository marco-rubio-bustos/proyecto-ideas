import { useEffect, useState } from "react";

interface DateProps {
  score: number;
  gameOver: (amount: boolean) => void;
}

const VALOR_INITIAL = 3;

export default function Foods({ score, gameOver }: DateProps) {
  const [food, setFood] = useState(VALOR_INITIAL);

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
    if (food <= 0) {
      gameOver(true);
    }
  }, [food, gameOver]);

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
