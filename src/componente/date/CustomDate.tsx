import { useEffect, useState } from "react";
import NumberDate from "./NumberDate.tsx";
import ChangeColor from "./ChangeColor.tsx";
import ChangeRange from "./ChangeRange.tsx";
import Points from "./Points.tsx";
import "../../App.css";

function CustomDate() {
  const [time, setTime] = useState(new Date());
  const [color, setColor] = useState<string>("#e614ca");
  const [rangeRadius, setRangeRadius] = useState<number>(0);
  const [rangeGap, setRangeGap] = useState<number>(0);
  const [tenHours, setTenHours] = useState(8);
  const [unitHours, setUnitHours] = useState(8);
  const [tenMinutes, setTenMinutes] = useState(8);
  const [unitMinutes, setUnitMinutes] = useState(8);
  const [tenSeconds, setTenSeconds] = useState(8);
  const [unitSeconds, setUnitSegundos] = useState(8);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Si quieres actualizar value basado en 'segundo', usa useEffect:
  useEffect(() => {
    const hours = time.getHours().toString().padStart(2, "0");
    const minutes = time.getMinutes().toString().padStart(2, "0");
    const seconds = time.getSeconds().toString().padStart(2, "0");

    setTenHours(Number(hours[0]));
    setUnitHours(Number(hours[1]));
    setTenMinutes(Number(minutes[0]));
    setUnitMinutes(Number(minutes[1]));
    setTenSeconds(Number(seconds[0]));
    setUnitSegundos(Number(seconds[1]));
  }, [time]);

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

  const getColor = (colorRecibido: string) => {
    setColor(colorRecibido); // lo guardamos para usarlo después
  };
  const getRangeRadius = (rangoRecibido: number) => {
    setRangeRadius(rangoRecibido); // lo guardamos para usarlo después
  };
  const getRangeGap = (rangoGapRecibido: number) => {
    setRangeGap(rangoGapRecibido); // lo guardamos para usarlo después
  };

  const segments = [
    visibleSpans(tenHours),
    visibleSpans(unitHours),
    "points",
    visibleSpans(tenMinutes),
    visibleSpans(unitMinutes),
    "points",
    visibleSpans(tenSeconds),
    visibleSpans(unitSeconds),
  ];

  return (
    <>
      <ChangeColor sendColor={getColor} />
      <ChangeRange sendRange={getRangeRadius} numMax={10} />
      <ChangeRange sendRange={getRangeGap} numMax={5}/>

      <div className="numerals">
        {segments.map((segment, index) =>
          segment === "points" ? (
            <Points key={`points-${index}`} color={color} rangeGap={rangeGap} />
          ) : Array.isArray(segment) ? (
            <NumberDate
              key={`num-${index}`}
              numerals={segment}
              numbers={numbers}
              color={color}
              rangeRadius={rangeRadius}
              rangeGap={rangeGap}
            />
          ) : null
        )}
      </div>
    </>
  );
}

export default CustomDate;
