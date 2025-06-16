import { useEffect, useState } from "react";
import NumberDate from "./NumberDate.tsx";
import ChangeColor from "./changeColor.tsx";
import Points from "./Points.tsx";
import "../../App.css";

function CustomDate() {
  const [time, setTime] = useState(new Date());
  const [color, setColor] = useState<string>("#4caf50");

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000); // actualiza cada 1 segundo

    return () => clearInterval(interval); // limpia el intervalo al desmontar
  }, []);

  const [tenHours, setTenHours] = useState(8);
  const [unitHours, setUnitHours] = useState(8);
  const [tenMinutes, setTenMinutes] = useState(8);
  const [unitMinutes, setUnitMinutes] = useState(8);
  const [tenSeconds, setTenSeconds] = useState(8);
  const [unitSeconds, setUnitSegundos] = useState(8);

  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");

  // Si quieres actualizar value basado en 'segundo', usa useEffect:
  useEffect(() => {
    setTenHours(Number(hours[0]));
  }, [seconds]);

  useEffect(() => {
    setUnitHours(Number(hours[1]));
  }, [seconds]);
  useEffect(() => {
    setTenMinutes(Number(minutes[0]));
  }, [seconds]);

  useEffect(() => {
    setUnitMinutes(Number(minutes[1]));
  }, [seconds]);
  useEffect(() => {
    setTenSeconds(Number(seconds[0]));
  }, [seconds]);

  useEffect(() => {
    setUnitSegundos(Number(seconds[1]));
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

  const getColor = (colorRecibido: string) => {
    setColor(colorRecibido); // lo guardamos para usarlo después
  };

  return (
    <div>
      <p>Fecha: {new Date().toLocaleDateString()}</p>
      <p>{time.toLocaleTimeString()}</p>
      <ChangeColor onEnviar={getColor} />
      <p>
        <strong>Horas:</strong> {hours} <br />
        <strong>Minutos:</strong> {minutes} <br />
        {/* <strong>Segundos:</strong> {seconds} <br /> */}
      </p>

      <div className="numerals">
        <div
          className="date"
          style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}
        >
          {numbers.map((num) => (
            <span
              key={num}
              style={{
                padding: "8px",
                backgroundColor: visibleSpansTwo(tenSeconds).includes(num)
                  ? color
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
                backgroundColor: visibleSpans(unitSeconds).includes(num)
                  ? "#4caf50"
                  : "",
              }}
            ></span>
          ))}
        </div>
      </div>
      <div className="numerals">
        <NumberDate numerals={visibleSpans(tenHours)} numbers={numbers} color={color} />
        <NumberDate numerals={visibleSpans(unitHours)} numbers={numbers} color={color}  />
        <Points color={color} />
        <NumberDate numerals={visibleSpans(tenMinutes)} numbers={numbers} color={color}  />
        <NumberDate numerals={visibleSpans(unitMinutes)} numbers={numbers} color={color}  />
        <Points color={color} />
        <NumberDate numerals={visibleSpans(tenSeconds)} numbers={numbers} color={color}  />
        <NumberDate numerals={visibleSpans(unitSeconds)} numbers={numbers} color={color}  />
      </div>
    </div>
  );
}

export default CustomDate;
