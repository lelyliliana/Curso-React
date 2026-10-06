import { useEffect, useId, useRef, useState } from "react";
import { useCatalogo } from "./useCatalogo.js";
export default function Catalogo({ cargar }) {
  const id = useId();
  const [escenario, setEscenario] = useState("normal");
  const { estado, iniciar, cancelar } = useCatalogo(cargar);
  const carga = useRef(null),
    cancelacion = useRef(null);
  useEffect(() => {
    if (
      estado.fase !== "loading" &&
      document.activeElement === cancelacion.current
    )
      carga.current?.focus();
  }, [estado.fase]);
  const mensajes = {
    idle: "Listo para cargar.",
    loading: "Cargando…",
    success: `${estado.datos.length} recursos cargados.`,
    empty: "No hay resultados.",
    error: `${estado.categoria}: ${estado.error}`,
  };
  return (
    <section aria-label="Catálogo de laboratorio">
      <h2>Catálogo de laboratorio</h2>
      <label htmlFor={id}>Respuesta de laboratorio</label>
      <select
        id={id}
        value={escenario}
        onChange={(e) => setEscenario(e.target.value)}
      >
        {[
          ["normal", "Datos válidos"],
          ["vacio", "Vacío"],
          ["http404", "HTTP 404"],
          ["http500", "HTTP 500"],
          ["jsoninvalido", "JSON inválido"],
          ["esquemainvalido", "Esquema inválido"],
          ["lento", "Respuesta lenta"],
          ["marcado", "Texto con marcado"],
        ].map(([v, t]) => (
          <option key={v} value={v}>
            {t}
          </option>
        ))}
      </select>
      <div className="barra">
        <button ref={carga} type="button" onClick={() => iniciar(escenario)}>
          Cargar catálogo
        </button>
        <button
          ref={cancelacion}
          type="button"
          disabled={estado.fase !== "loading"}
          onClick={() => { cancelar(); carga.current?.focus(); }}
        >
          Cancelar solicitud
        </button>
      </div>
      <p role="status">{mensajes[estado.fase]}</p>
      <ul aria-busy={estado.fase === "loading"}>
        {estado.datos.map((d) => (
          <li key={d.id}>{d.titulo}</li>
        ))}
      </ul>
      <pre>{JSON.stringify(estado, null, 2)}</pre>
    </section>
  );
}
