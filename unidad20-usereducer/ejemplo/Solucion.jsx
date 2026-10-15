import { useReducer } from "react";
import { reducer as base } from "./App.jsx";
export function reducer(cantidad, accion) {
  return accion.type === "sumarDos" ? cantidad + 2 : base(cantidad, accion);
}
export default function Solucion() {
  const [cantidad, dispatch] = useReducer(reducer, 0);
  return (
    <section>
      <h2>Extender una transición pura</h2>
      <p role="status">Cantidad: {cantidad}</p>
      {["sumar", "sumarDos", "restar", "reiniciar"].map((type) => (
        <button key={type} type="button" onClick={() => dispatch({ type })}>
          {type}
        </button>
      ))}
    </section>
  );
}
