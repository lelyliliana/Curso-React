import { useEffect, useState } from "react";
export function Reloj({ intervaloMs }) {
  const [ticks, setTicks] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTicks((n) => n + 1), intervaloMs);
    return () => clearInterval(id);
  }, [intervaloMs]);
  return <p role="status">Ticks: {ticks}</p>;
}
export default function Solucion() {
  const [visible, setVisible] = useState(true),
    [intervaloMs, setIntervaloMs] = useState(1000);
  return (
    <section>
      <h2>Intervalo configurable y limpieza</h2>
      <label htmlFor="intervalo">Intervalo</label>
      <select
        id="intervalo"
        value={intervaloMs}
        onChange={(e) => setIntervaloMs(Number(e.target.value))}
      >
        <option value="1000">1000 ms</option>
        <option value="200">200 ms</option>
      </select>
      <button type="button" onClick={() => setVisible((v) => !v)}>
        {visible ? "Ocultar reloj" : "Mostrar reloj"}
      </button>
      {visible ? <Reloj intervaloMs={intervaloMs} /> : <p>Reloj desmontado.</p>}
    </section>
  );
}
