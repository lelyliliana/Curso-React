import { useState } from "react";
export default function App() {
  const [fase, setFase] = useState("idle");
  const mensajes = {
    idle: "Listo",
    loading: "Cargando",
    success: "Datos disponibles",
    empty: "No hay resultados",
    error: "Falló la operación",
  };
  return (
    <section>
      <h2>Renderizado condicional</h2>
      <label htmlFor="fase">Estado simulado</label>
      <select id="fase" value={fase} onChange={(e) => setFase(e.target.value)}>
        {Object.keys(mensajes).map((k) => (
          <option key={k}>{k}</option>
        ))}
      </select>
      <p role={fase === "error" ? "alert" : "status"}>{mensajes[fase]}</p>
      {fase === "success" && (
        <ul>
          <li>Recurso 1</li>
          <li>Recurso 2</li>
        </ul>
      )}
    </section>
  );
}
