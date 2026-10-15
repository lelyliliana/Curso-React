import { useState } from "react";
const tareas = [
  { id: 1, titulo: "Leer", completada: false },
  { id: 2, titulo: "Practicar", completada: true },
];
export default function Solucion() {
  const [filtro, setFiltro] = useState("todas"),
    [busqueda, setBusqueda] = useState("");
  const termino = busqueda.trim().toLocaleLowerCase("es");
  const visibles = tareas.filter(
    (t) =>
      (filtro === "todas" || t.completada === (filtro === "completadas")) &&
      t.titulo.toLocaleLowerCase("es").includes(termino),
  );
  return (
    <section>
      <h2>Combinar dos criterios sin duplicar datos</h2>
      <label htmlFor="estado-resuelto">Estado</label>
      <select
        id="estado-resuelto"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      >
        {["todas", "pendientes", "completadas"].map((f) => (
          <option key={f}>{f}</option>
        ))}
      </select>
      <label htmlFor="buscar-resuelto">Buscar título</label>
      <input
        id="buscar-resuelto"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
      <p role="status">
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
