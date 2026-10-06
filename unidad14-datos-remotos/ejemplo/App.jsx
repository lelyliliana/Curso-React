import { useEffect, useState } from "react";
import { cargarCatalogo } from "../../features/catalogo/cliente.js";
export default function App() {
  const [escenario, setEscenario] = useState("normal"),
    [estado, setEstado] = useState({ fase: "loading", datos: [], error: "" });
  useEffect(() => {
    const controller = new AbortController();
    let vigente = true;
    setEstado({ fase: "loading", datos: [], error: "" });
    cargarCatalogo({ escenario, signal: controller.signal })
      .then((datos) => {
        if (vigente)
          setEstado({
            fase: datos.length ? "success" : "empty",
            datos,
            error: "",
          });
      })
      .catch((error) => {
        if (vigente)
          setEstado({
            fase: "error",
            datos: [],
            error: `${error.categoria}: ${error.message}`,
          });
      });
    return () => {
      vigente = false;
      controller.abort();
    };
  }, [escenario]);
  return (
    <section>
      <h2>Datos según una dependencia</h2>
      <label htmlFor="escenario">Escenario del efecto</label>
      <select
        id="escenario"
        value={escenario}
        onChange={(e) => setEscenario(e.target.value)}
      >
        {["normal", "vacio", "http500", "jsoninvalido", "lento"].map((v) => (
          <option key={v}>{v}</option>
        ))}
      </select>
      <p role="status">{estado.fase}</p>
      {estado.error && <p role="alert">{estado.error}</p>}
      <ul>
        {estado.datos.map((r) => (
          <li key={r.id}>{r.titulo}</li>
        ))}
      </ul>
    </section>
  );
}
