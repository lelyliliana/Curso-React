import { useState } from "react";
function Contador({ titulo }) {
  const [cantidad, setCantidad] = useState(0);
  return (
    <section>
      <h3>{titulo}</h3>
      <p>Cantidad: {cantidad}</p>
      <button type="button" onClick={() => setCantidad((n) => n + 1)}>
        Sumar en {titulo}
      </button>
    </section>
  );
}
export default function App() {
  return (
    <section>
      <h2>Instancias independientes</h2>
      <Contador titulo="Primero" />
      <Contador titulo="Segundo" />
    </section>
  );
}
