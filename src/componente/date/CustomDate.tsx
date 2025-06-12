import { useEffect, useState } from "react";
import "../../App.css";

function CustomDate() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000); // actualiza cada 1 segundo

    return () => clearInterval(interval); // limpia el intervalo al desmontar
  }, []);

  const [valueTwo, setValueTwo] = useState(1); // Cambia a 2 para probar otros
  const [value, setValue] = useState(1); // Cambia a 2 para probar otros

  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0").toString();

  // Si quieres actualizar value basado en 'segundo', usa useEffect:
  useEffect(() => {
    setValueTwo(Number(seconds[0]));
  }, [seconds]);

  useEffect(() => {
    setValue(Number(seconds[1]));
  }, [seconds]);

  const numbers = Array.from({ length: 15 }, (_, i) => i + 1);

  const visibleSpansMap: Record<number, number[]> = {
    0: [1, 2, 3, 4, 6, 7, 9, 10, 12, 13, 14, 15],
    1: [3, 5, 6, 9, 12, 15],
    2: [1, 2, 3, 6, 7, 8, 9, 10, 13, 14, 15],
    3: [1, 2, 3, 6, 7, 8, 9, 12, 13, 14, 15],
    4: [1, 3, 4, 6, 7, 8, 9, 12, 15],
    5: [1, 2, 3, 4, 7, 8, 9, 12, 13, 14, 15],
    6: [1, 2, 3, 4, 7, 8, 9, 10, 12, 13, 14, 15],
    7: [1, 2, 3, 6, 9, 12, 15],
    8: [1, 2, 3, 4, 6, 7, 8, 9, 10, 12, 13, 14, 15],
    9: [1, 2, 3, 4, 6, 7, 8, 9, 12, 13, 14, 15],
  };

  const visibleSpans = (val: number): number[] => visibleSpansMap[val] ?? [];
  const visibleSpansTwo = (val: number): number[] => visibleSpansMap[val] ?? [];

  return (
    <div>
      <h1>Fecha</h1>
      <p>Esta es la fecha del proyecto</p>
      <p>Fecha: {new Date().toLocaleDateString()}</p>
      <p>{time.toLocaleTimeString()}</p>

      <p>
        <strong>Horas:</strong> {hours} <br />
        <strong>Minutos:</strong> {minutes} <br />
        <strong>Segundos:</strong> {seconds} <br />
      </p>

      <div className="seconds">
        <div
          className="date"
          style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}
        >
          {numbers.map((num) => (
            <span
              key={num}
              style={{
                padding: "8px",
                backgroundColor: visibleSpansTwo(valueTwo).includes(num)
                  ? "#4caf50"
                  : "",
              }}
            ></span>
          ))}
        </div>
        <div
          className="date"
          style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}
        >
          {numbers.map((num) => (
            <span
              key={num}
              style={{
                padding: "8px",
                backgroundColor: visibleSpans(value).includes(num)
                  ? "#4caf50"
                  : "",
              }}
            ></span>
          ))}
        </div>

      </div>
    </div>
  );
}

export default CustomDate;
