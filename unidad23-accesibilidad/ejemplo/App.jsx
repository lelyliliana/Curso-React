import { useRef, useState } from "react";
export default function App() {
  const [recursos, setRecursos] = useState([]);
  const agregar = useRef(null);
  return (
    <section>
      <h2>Anuncios y foco estable</h2>
      <button
        ref={agregar}
        type="button"
        onClick={() =>
          setRecursos((r) => [
            ...r,
            { id: r.length + 1, titulo: `Recurso ${r.length + 1}` },
          ])
        }
      >
        Agregar recurso
      </button>
      <button
        type="button"
        onClick={() => {
          setRecursos([]);
          agregar.current?.focus();
        }}
      >
        Limpiar recursos
      </button>
      <p role="status">{recursos.length} recursos disponibles.</p>
      <ul>
        {recursos.map((r) => (
          <li key={r.id}>{r.titulo}</li>
        ))}
      </ul>
    </section>
  );
}
