import { useState } from "react";
const mensajes = {
  idle: "Listo",
  loading: "Cargando",
  success: "Datos disponibles",
  empty: "No hay resultados",
  error: "Falló la operación",
  denied: "No tienes permiso para ver estos recursos",
};
export default function Solucion() {
  const [fase, setFase] = useState("idle");
  return (
    <section>
      <h2>Vacío, fallo y permiso denegado</h2>
      <label htmlFor="fase-resuelta">Estado simulado</label>
      <select
        id="fase-resuelta"
        value={fase}
        onChange={(e) => setFase(e.target.value)}
      >
        {Object.keys(mensajes).map((f) => (
          <option key={f}>{f}</option>
        ))}
      </select>
      <p role={fase === "error" || fase === "denied" ? "alert" : "status"}>
        {mensajes[fase]}
      </p>
      {fase === "success" && (
        <ul>
          <li>Recurso 1</li>
          <li>Recurso 2</li>
        </ul>
      )}
      <p>
        La selección es una simulación de interfaz; no comprueba permisos
        reales.
      </p>
    </section>
  );
}
