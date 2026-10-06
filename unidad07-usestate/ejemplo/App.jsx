import { useState } from "react";
export default function App() {
  const [cantidad, setCantidad] = useState(0);
  function sumarTres() {
    setCantidad((n) => n + 1);
    setCantidad((n) => n + 1);
    setCantidad((n) => n + 1);
  }
  return (
    <section>
      <h2>Snapshot y actualizadores</h2>
      <p role="status">Cantidad: {cantidad}</p>
      <button type="button" onClick={sumarTres}>
        Sumar tres
      </button>
      <button type="button" onClick={() => setCantidad(0)}>
        Reiniciar
      </button>
    </section>
  );
}
