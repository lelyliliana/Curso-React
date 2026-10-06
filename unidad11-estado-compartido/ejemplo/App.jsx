import { useState } from "react";
function Campo({ id, titulo, cantidad, onCantidad }) {
  return (
    <div>
      <label htmlFor={id}>{titulo}</label>
      <input
        id={id}
        type="range"
        min="0"
        max="10"
        value={cantidad}
        onChange={(e) => onCantidad(Number(e.target.value))}
      />
      <p>
        {titulo}: {cantidad}
      </p>
    </div>
  );
}
export default function App() {
  const [cantidad, setCantidad] = useState(2);
  const total = cantidad * 5;
  return (
    <section>
      <h2>Un propietario del estado</h2>
      <Campo
        id="a"
        titulo="Control A"
        cantidad={cantidad}
        onCantidad={setCantidad}
      />
      <Campo
        id="b"
        titulo="Control B"
        cantidad={cantidad}
        onCantidad={setCantidad}
      />
      <p role="status">Total: {total}</p>
    </section>
  );
}
