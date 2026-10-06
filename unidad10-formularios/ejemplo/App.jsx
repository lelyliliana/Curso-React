import AccionNombre from "./AccionNombre.jsx";
import { useId, useRef, useState } from "react";
export function FormularioNombre({ onGuardar = () => {} }) {
  const [nombre, setNombre] = useState(""),
    [mensaje, setMensaje] = useState(""),
    [error, setError] = useState("");
  const id = useId(),
    entrada = useRef(null);
  function enviar(e) {
    e.preventDefault();
    const valor = nombre.trim();
    if (valor.length < 2 || valor.length > 40) {
      setError("Nombre de 2 a 40 caracteres.");
      entrada.current?.focus();
      return;
    }
    setError("");
    onGuardar(valor);
    setMensaje(`Recibido: ${valor}`);
  }
  return (
    <form onSubmit={enviar}>
      <label htmlFor={id}>Nombre ficticio</label>
      <input
        ref={entrada}
        id={id}
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
        maxLength={40}
        aria-invalid={error ? true : undefined}
        aria-describedby={`${id}-error`}
      />
      <button>Guardar nombre</button>
      <p id={`${id}-error`} role="alert">
        {error}
      </p>
      <p role="status">{mensaje}</p>
    </form>
  );
}
export default function App() {
  return (
    <section>
      <h2>Formulario controlado</h2>
      <FormularioNombre />
      <details>
        <summary>Extensión: acciones de React 19</summary>
        <AccionNombre />
      </details>
    </section>
  );
}
