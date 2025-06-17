interface ChangeColorProps {
  sendColor: (dato: string) => void;
}

function ChangeColor({ sendColor }: ChangeColorProps) {

  const enviar = () => {
    const dato = (document.getElementById('colorPicker') as HTMLInputElement | null)?.value ?? "";
    sendColor(dato);
  };

  return (
    <div className="changeColor">
      <input type="color" id="colorPicker"></input>
      <button onClick={enviar}>Cambiar color</button>
    </div>
  );
}

export default ChangeColor;
