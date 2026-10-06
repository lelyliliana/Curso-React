import { memo, useCallback, useMemo, useState } from "react";
const datos = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  titulo: `Recurso ${i + 1}`,
}));
const Lista = memo(function Lista({ items, onElegir }) {
  return (
    <ul>
      {items.map((r) => (
        <li key={r.id}>
          <button type="button" onClick={() => onElegir(r.titulo)}>
            {r.titulo}
          </button>
        </li>
      ))}
    </ul>
  );
});
export default function App() {
  const [q, setQ] = useState(""),
    [contador, setContador] = useState(0),
    [elegido, setElegido] = useState("Ninguno");
  const visibles = useMemo(
    () => datos.filter((r) => r.titulo.includes(q)),
    [q],
  );
  const elegir = useCallback((titulo) => setElegido(titulo), []);
  return (
    <section>
      <h2>Referencias y memoización</h2>
      <label htmlFor="q">Filtrar recursos</label>
      <input id="q" value={q} onChange={(e) => setQ(e.target.value)} />
      <button type="button" onClick={() => setContador((n) => n + 1)}>
        Cambiar estado ajeno a la lista
      </button>
      <p>
        Contador: {contador}. Elegido: {elegido}
      </p>
      <Lista items={visibles} onElegir={elegir} />
    </section>
  );
}
