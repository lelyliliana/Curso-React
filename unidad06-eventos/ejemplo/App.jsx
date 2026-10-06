import { useState } from "react";
export default function App() {
  const [mensaje, setMensaje] = useState("Sin eventos");
  return (
    <section>
      <h2>Eventos y acciones</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setMensaje("Formulario recibido sin navegar.");
        }}
      >
        <button>Enviar formulario</button>
        <button
          type="button"
          onClick={(e) => setMensaje(`Pulsado: ${e.currentTarget.textContent}`)}
        >
          Acción local
        </button>
      </form>
      <p role="status">{mensaje}</p>
    </section>
  );
}
