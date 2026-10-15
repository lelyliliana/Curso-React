import { useRef, useState } from "react";
export default function Solucion() {
  const [recursos, setRecursos] = useState([]),
    [mensaje, setMensaje] = useState("Sin cambios.");
  const agregar = useRef(null);
  function limpiar() {
    setMensaje(`Se eliminaron ${recursos.length} recursos.`);
    setRecursos([]);
    agregar.current?.focus();
  }
  return (
    <section>
      <h2>Cantidad eliminada y destino de foco</h2>
      <button
        ref={agregar}
        type="button"
        onClick={() => {
          setRecursos((r) => [
            ...r,
            { id: r.length + 1, titulo: `Recurso ${r.length + 1}` },
          ]);
          setMensaje("Recurso agregado.");
        }}
      >
        Agregar recurso
      </button>
      <button type="button" onClick={limpiar}>
        Limpiar recursos
      </button>
      <p role="status">
        {mensaje} {recursos.length} disponibles.
      </p>
      <ul>
        {recursos.map((r) => (
          <li key={r.id}>{r.titulo}</li>
        ))}
      </ul>
    </section>
  );
}
