interface Obstacle {
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;
  opacity: number;
  backgroundColor: string;
  backgroundImage?: string;
  backgroundPosition?: string;
  zIndex: boolean;
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
            backgroundColor: `rgba(${obs.backgroundColor}, ${obs.opacity})`,
            backgroundImage: obs.backgroundImage,
            backgroundPosition: obs.backgroundPosition,
            opacity: obs.opacity,
            fontSize: "7px",
            backgroundSize: "152px 118px",
            zIndex: obs.zIndex ? "9" : "0",
          }}
        >
          {obs.x / obs.width}-{obs.y / obs.height}
        </div>
      ))}
    </>
  );
}
