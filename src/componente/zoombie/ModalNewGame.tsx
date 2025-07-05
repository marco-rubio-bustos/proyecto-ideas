import { useState } from "react";
import pixel from "./img/pixel.svg";
import "./css/modal.css";

interface DateProps {
  showModal: boolean;
  onSelectPlayer: (index: number) => void;
  getNewGame: (amount: boolean) => void;
}

export default function ModalGameOver({
  showModal,
  onSelectPlayer,
  getNewGame,
}: DateProps) {
  const [selectedPlayer, setSelectedPlayer] = useState<number | null>(null);

  const modal = showModal ? "flex" : "none";

  const spriteBase: React.CSSProperties = {
    width: "4.1rem",
    height: "4rem",
    backgroundImage: `url(${pixel})`,
    backgroundRepeat: "no-repeat",
    imageRendering: "pixelated",
    transform: "translate(0px, 0px)",
    backgroundSize: "697px 472px",
    zIndex: 0,
    cursor: "pointer",
  };

  const positions = ["0px", "-134px", "-270px", "-405px", "-541px"];

  return (
    <div style={{ display: modal, bottom: "0px" }} className="modalBox">
      <div className="modal newGame">
        <h1>SALVA A YUNCITO</h1>
        <div className="playerSelect" style={{ display: "flex", gap: "1rem" }}>
          {positions.map((pos, idx) => (
            <div
              key={idx}
              onClick={() => {
                setSelectedPlayer(idx);
                onSelectPlayer(idx);
              }}
              style={{
                ...spriteBase,
                backgroundPosition: `${pos} 0px`,
                outline: selectedPlayer === idx ? "2px solid gold" : "none",
              }}
            />
          ))}
        </div>
        <button
          onClick={() => {
            if (selectedPlayer !== null) {
              getNewGame(false);
            }
          }}
        >
          Jugar
        </button>
      </div>
    </div>
  );
}
