import { useState } from "react";
export function useContador(inicio = 0) {
  const [cantidad, setCantidad] = useState(inicio);
  return {
    cantidad,
    sumar: () => setCantidad((n) => n + 1),
    restar: () => setCantidad((n) => Math.max(0, n - 1)),
    reiniciar: () => setCantidad(inicio),
  };
}
function Control({ nombre, inicio }) {
  const { cantidad, sumar, restar, reiniciar } = useContador(inicio);
  return (
    <section aria-label={`Control ${nombre}`}>
      <h3>{nombre}</h3>
      <p>
        Cantidad: {cantidad}. Inicio actual: {inicio}
      </p>
      <button type="button" onClick={sumar}>
        Sumar {nombre}
      </button>
      <button type="button" onClick={restar}>
        Restar {nombre}
      </button>
      <button type="button" onClick={reiniciar}>
        Reiniciar {nombre}
      </button>
    </section>
  );
}
export default function Solucion() {
  const [inicio, setInicio] = useState(100);
  return (
    <section>
      <h2>Hook con límite y contrato de reinicio</h2>
      <button type="button" onClick={() => setInicio(50)}>
        Cambiar inicio de C a 50
      </button>
      <Control nombre="A" inicio={0} />
      <Control nombre="B" inicio={10} />
      <Control nombre="C" inicio={inicio} />
    </section>
  );
}
