import "../../App.css";

interface ColorDateProps {
  color: string;
}

function Points({ color }: ColorDateProps) {
  const style = { backgroundColor: `${color}80` };

  return (
    <div className="points">
      {[...Array(2)].map((_, index) => (
        <span key={index} style={style}></span>
      ))}
    </div>
  );
}

export default Points;
