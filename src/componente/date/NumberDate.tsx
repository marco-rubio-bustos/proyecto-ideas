interface ColorDateProps {
  numerals: number[];
  numbers: number[];
  color: string;
  rangeRadius: number;
  rangeGap: number;
}

function NumberDate({ numerals, numbers, color, rangeRadius, rangeGap }: ColorDateProps) {
  return (
    <div className={`date date-gap-${rangeGap}`}>
      {numbers.map((num) => (
        <span className={`span-border-${rangeRadius}`}
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
