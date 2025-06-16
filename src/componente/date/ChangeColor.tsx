interface ChangeColorProps {
  onEnviar: (dato: string) => void;
}

function ChangeColor({ onEnviar }: ChangeColorProps) {
  const enviar = () => {
    const dato = (document.getElementById('colorPicker') as HTMLInputElement | null)?.value ?? "";
    onEnviar(dato);
  };

  return (
    <div className="changeColor">
      <input type="color" id="colorPicker"></input>
      <button onClick={enviar}>Cambiar color</button>;
    </div>
  );
}

export default ChangeColor;
