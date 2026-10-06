import { useEffect, useState } from "react";
const recursos = ["React", "JavaScript", "HTML"];
export default function App() {
  const [busqueda, setBusqueda] = useState("");
  const visibles = recursos.filter((r) =>
    r.toLowerCase().includes(busqueda.toLowerCase()),
  );
  useEffect(() => {
    const anterior = document.title;
    document.title = `${visibles.length} recursos (React)`;
    return () => {
      document.title = anterior;
    };
  }, [visibles.length]);
  return (
    <section>
      <h2>Cálculo durante render, sincronización en efecto</h2>
      <label htmlFor="q">Buscar recurso</label>
      <input
        id="q"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
      <p>{visibles.length} resultados</p>
      <ul>
        {visibles.map((r) => (
          <li key={r}>{r}</li>
        ))}
      </ul>
    </section>
  );
}
