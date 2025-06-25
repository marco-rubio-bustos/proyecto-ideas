import { useEffect, useState } from "react";
import pixel from "./img/pixel.svg";
import "./css/modal.css";

interface DateProps {
  showModal: boolean;
  getOtherGame: (isNewGame: boolean) => void;
}

export default function ModalGameOver({ showModal, getOtherGame }: DateProps) {
  const modal = showModal ? "flex" : "none";

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
        <button className="button" onClick={() => getOtherGame(false)}>
          Jugar de nuevo
        </button>
      </div>
    </div>
  );
}
