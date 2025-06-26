import { useEffect, useState } from "react";
import pixel from "./img/pixel.svg";
import "./css/modal.css";

interface DateProps {
  showModal: boolean;
  getOtherGame: (amount: boolean) => void;
  getNewGame: (amount: boolean) => void;
}

export default function ModalGameOver({ showModal, getOtherGame, getNewGame }: DateProps) {
  const modal = showModal ? "none" : "flex";

  return (
    <div
      style={{
        display: modal,
        bottom: "0px",
      }}
      className="modalBox"
    >
      <div className="modal gameOver">
        JUEGO TERMINADO
        <div className="buttons">
          <button className="button" onClick={() => getOtherGame(true)}>
            Jugar de nuevo
          </button>
          <button className="button" onClick={() => getNewGame(true)}>
            Elegir gatito
          </button>
        </div>
      </div>
    </div>
  );
}
