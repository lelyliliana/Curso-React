import { useReducer } from "react";
export function reducer(cantidad, accion) {
  switch (accion.type) {
    case "sumar":
      return cantidad + 1;
    case "restar":
      return Math.max(0, cantidad - 1);
    case "reiniciar":
      return 0;
    default:
      throw new Error("Acción desconocida");
  }
}
export default function App() {
  const [cantidad, dispatch] = useReducer(reducer, 0);
  return (
    <section>
      <h2>Acciones y transición pura</h2>
      <p role="status">Cantidad: {cantidad}</p>
      {["sumar", "restar", "reiniciar"].map((type) => (
        <button key={type} type="button" onClick={() => dispatch({ type })}>
          {type}
        </button>
      ))}
    </section>
  );
}
