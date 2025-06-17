import { useState } from "react";

interface ChangeRangeProps {
  sendRange: (dato: number) => void;
  numMax: number;
}

function ChangeRangeRadius({ sendRange, numMax}: ChangeRangeProps) {
  const [valor, setValor] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nuevoValor = Number(e.target.value);
    setValor(nuevoValor);
    sendRange(nuevoValor); // aquí se envía al padre
  };

  return (
    <div className="changeRange">
      <input
        type="range"
        id="vol"
        name="vol"
        min="0"
        max={numMax}
        value={valor}
        onChange={handleChange}
      />
    </div>
  );
}

export default ChangeRangeRadius;
