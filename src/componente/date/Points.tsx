import "../../App.css";

interface ColorDateProps {
  color: string;
  rangeGap: number;
}

function Points({ color, rangeGap }: ColorDateProps) {
  const style = { backgroundColor: `${color}80` };

  return (
    <div className={`points points-${rangeGap}`}>
      {[...Array(2)].map((_, index) => (
        <span key={index} style={style}></span>
      ))}
    </div>
  );
}

export default Points;
