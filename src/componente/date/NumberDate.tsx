import "../../App.css";

interface NumberDateProps {
  numerals: Array<number>;
  numbers: number[];
}

function NumberDate({ numerals, numbers }: NumberDateProps) {
  return (
    <div className="date">
      {numbers.map((num) => (
        <span
          key={num}
          style={{
            backgroundColor: numerals.includes(num) ? "#357c39" : "",
          }}
        ></span>
      ))}
    </div>
  );
}

export default NumberDate;
