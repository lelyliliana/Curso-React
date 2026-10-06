import { useEffect, useState } from "react";
function Reloj() {
  const [ticks, setTicks] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTicks((n) => n + 1), 1000);
    return () => clearInterval(id);
  }, []);
  return <p role="status">Ticks: {ticks}</p>;
}
export default function App() {
  const [visible, setVisible] = useState(true);
  return (
    <section>
      <h2>Montar, limpiar y volver a montar</h2>
      <button type="button" onClick={() => setVisible((v) => !v)}>
        {visible ? "Ocultar reloj" : "Mostrar reloj"}
      </button>
      {visible ? <Reloj /> : <p>Reloj desmontado; no conserva su contador.</p>}
    </section>
  );
}
