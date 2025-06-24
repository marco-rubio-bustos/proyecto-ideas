import { useEffect, useState } from "react";
import pixel from "./img/pixel.svg";
import "./css/modal.css";

interface DateProps {
  showModal: boolean;
  collectWater: number;
  takeWater: (amount: number) => void;
}

export default function Modal({
  showModal,
  collectWater,
  takeWater,
}: DateProps) {
  const [cooking, setCooking] = useState(10);
  const [start, setStart] = useState(false);
  const [take, setTake] = useState(false);
  const [msg, setMsg] = useState("0 cc");
  const [isPurifying, setIsPurifying] = useState(false);
  const [active, setActive] = useState(false);

  const drinkWaterPurified = collectWater / 10;
  const modal = showModal ? "flex" : "none";

  useEffect(() => {
    if (!start) {
      setMsg(collectWater + " cc");
    }
  }, [collectWater, showModal, start]);

  useEffect(() => {
    setMsg(collectWater + " cc");
    if (!start) return;

    const interval = setInterval(() => {
      setCooking((prev) => {
        const newFood = prev > 0 ? prev - 1 : 0;
        if (newFood === 0) {
          setMsg(drinkWaterPurified + " cc listo");
          setIsPurifying(false);
        } else {
          setMsg(`en ${newFood} s`);
          setActive(true);
        }

        return newFood;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [start, collectWater]);

  useEffect(() => {
    if (!take) return;
    takeWater(drinkWaterPurified);

    setTake(false);
    setStart(false);
    setCooking(10);
  }, [take]);

  return (
    <div
      style={{
        display: modal,
        bottom: "150px",
      }}
      className="modalBox"
    >
      <div className="modal cook">
        Cocina
        <div className="createFood">
          <div
            className="createFoodBox"
            style={{
              width: "16px",
              height: "16px",
              backgroundImage: `url(${pixel})`,
              backgroundPosition: "0px -50px",
              backgroundRepeat: "no-repeat",
              imageRendering: "pixelated",
              backgroundSize: "152px 118px",
            }}
          ></div>
          <p
            onClick={() => {
              if (drinkWaterPurified === 0) {
                return;
              }

              setStart(true);
              setIsPurifying(true);
            }}
          >
            {isPurifying ? "Purificando..." : "Purificar"}
          </p>
          <p
            onClick={() => {
              if (drinkWaterPurified > 0 && active) {
                setTake(true);
              }
            }}
          >
            {msg}
          </p>
        </div>
      </div>
    </div>
  );
}
