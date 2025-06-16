interface ColorDateProps {
  numerals: number[];
  numbers: number[];
  color: string;
}

function NumberDate({ numerals, numbers, color }: ColorDateProps) {
  return (
    <div className="date">
      {numbers.map((num) => (
        <span
          key={num}
          style={{
            backgroundColor: numerals.includes(num) ? color : "",
          }}
        ></span>
      ))}
    </div>
  );
}

export default NumberDate;
