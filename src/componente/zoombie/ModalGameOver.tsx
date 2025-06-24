import { useEffect, useState } from "react";
import pixel from "./img/pixel.svg";
import "./css/modal.css";

interface DateProps {
  showModal: boolean;
}

export default function ModalGameOver({ showModal }: DateProps) {
  const modal = showModal ? "flex" : "none";

  return (
    <div
      style={{
        display: modal,
        bottom: "0px",
      }}
      className="modalBox"
    >
      <div className="modal gameOver">game over</div>
    </div>
  );
}
