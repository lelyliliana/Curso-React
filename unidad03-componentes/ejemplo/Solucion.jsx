import { useState } from "react";
function Contador({ nombre }) {
  const [cantidad, setCantidad] = useState(0);
  return (
    <section aria-label={nombre}>
      <h3>{nombre}</h3>
      <p>Cantidad: {cantidad}</p>
      <button type="button" onClick={() => setCantidad((n) => n + 1)}>
        Sumar {nombre}
      </button>
    </section>
  );
}
export default function Solucion() {
  const [revision, setRevision] = useState(0);
  return (
    <section>
      <h2>Identidad y reinicio selectivo</h2>
      <button type="button" onClick={() => setRevision((n) => n + 1)}>
        Recrear Primero
      </button>
      <Contador key={revision} nombre="Primero" />
      <Contador nombre="Segundo" />
      <Contador nombre="Tercero" />
    </section>
  );
}
