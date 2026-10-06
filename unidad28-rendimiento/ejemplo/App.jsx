import { Profiler, useState } from "react";
function Lista() {
  return (
    <ul>
      {Array.from({ length: 100 }, (_, i) => (
        <li key={i}>Recurso fijo {i + 1}</li>
      ))}
    </ul>
  );
}
export default function App() {
  const [cantidad, setCantidad] = useState(0);
  function medir(id, fase, duracion) {
    console.log("Perfil de laboratorio", { id, fase, duracion });
  }
  return (
    <section>
      <h2>Medir renders con Profiler</h2>
      <button type="button" onClick={() => setCantidad((n) => n + 1)}>
        Actualizar padre
      </button>
      <p>Cantidad: {cantidad}</p>
      <Profiler id="lista" onRender={medir}>
        <Lista />
      </Profiler>
    </section>
  );
}
