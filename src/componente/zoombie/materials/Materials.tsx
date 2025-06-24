import pixel from "../img/pixel.png";

interface DateProps {
  score: number;
  type: string;
}

export default function Materials({ score, type }: DateProps) {

  let coord = "0px 0px";
  if (type === "rock") {
    coord = "0px -18px";
  } else if (type === "tree") {
    coord = "0px -35px";
  } else if (type === "water") {
    coord = "0px -52px";
  }

  return (
    <div className="score">
      <div
        style={{
          position: "relative",
          width: "1rem",
          height: "1rem",
          backgroundImage: `url(${pixel})`,
          backgroundPosition: coord,
          backgroundSize: "152px 118px",
        }}
      ></div>
      <p>{score}</p>
    </div>
  );
}
