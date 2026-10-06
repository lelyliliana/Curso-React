import { useState } from "react";
const tareas = [
  { id: 1, titulo: "Leer", completada: false },
  { id: 2, titulo: "Practicar", completada: true },
];
export default function App() {
  const [filtro, setFiltro] = useState("todas");
  const visibles = tareas.filter(
    (t) => filtro === "todas" || t.completada === (filtro === "completadas"),
  );
  return (
    <section>
      <h2>Datos, filtro y vista derivada</h2>
      <label htmlFor="filtro">Filtro local de la vista</label>
      <select
        id="filtro"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      >
        {["todas", "pendientes", "completadas"].map((v) => (
          <option key={v}>{v}</option>
        ))}
      </select>
      <p>
        {visibles.length} de {tareas.length} tareas
      </p>
      <ul>
        {visibles.map((t) => (
          <li key={t.id}>{t.titulo}</li>
        ))}
      </ul>
    </section>
  );
}
