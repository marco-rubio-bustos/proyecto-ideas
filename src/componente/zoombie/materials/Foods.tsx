interface DateProps {
  score: number;
}

export default function Materials({ score }: DateProps) {
  return (
    <div className="score">
      <div
        style={{
          position: "relative",
          width: "1rem",
          height: "1rem",
          backgroundColor: "red",
        }}
      ></div>
      <p>{score}</p>
    </div>
  );
}
