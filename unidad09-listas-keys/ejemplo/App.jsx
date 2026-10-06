import { useState } from "react";
const inicial = [
  { id: 1, nombre: "Ana" },
  { id: 2, nombre: "Luis" },
];
export default function App() {
  const [personas, setPersonas] = useState(inicial);
  return (
    <section>
      <h2>Keys e identidad de filas</h2>
      <button
        type="button"
        onClick={() => setPersonas((p) => [...p].reverse())}
      >
        Invertir orden
      </button>
      <ul>
        {personas.map((p) => (
          <li key={p.id}>
            <label htmlFor={`alias-${p.id}`}>Alias de {p.nombre}</label>
            <input id={`alias-${p.id}`} defaultValue={p.nombre} />
          </li>
        ))}
      </ul>
    </section>
  );
}
