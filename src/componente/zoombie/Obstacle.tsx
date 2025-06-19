interface Obstacle {
  x: number;
  y: number;
  width: number;
  height: number;
  opacity: number;
  background: string;
}

interface DateProps {
  obstacles: Array<Obstacle>;
}

export default function Obstacle({ obstacles }: DateProps) {
  return (
    <>
      {obstacles.map((obs, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: obs.x,
            top: obs.y,
            width: obs.width,
            height: obs.height,
            background: `rgba(${obs.background}, ${obs.opacity})`,
          }}
        > 
        {obs.opacity}
        </div>
      ))}
    </>
  );
}
