import { useState } from "react";
export function useContador(inicio = 0) {
  const [cantidad, setCantidad] = useState(inicio);
  return {
    cantidad,
    sumar: () => setCantidad((n) => n + 1),
    reiniciar: () => setCantidad(inicio),
  };
}
function Control({ nombre, inicio }) {
  const { cantidad, sumar, reiniciar } = useContador(inicio);
  return (
    <section>
      <h3>{nombre}</h3>
      <p>Cantidad: {cantidad}</p>
      <button type="button" onClick={sumar}>
        Sumar {nombre}
      </button>
      <button type="button" onClick={reiniciar}>
        Reiniciar {nombre}
      </button>
    </section>
  );
}
export default function App() {
  return (
    <section>
      <h2>Reutilizar lógica sin compartir estado</h2>
      <Control nombre="A" inicio={0} />
      <Control nombre="B" inicio={10} />
    </section>
  );
}
