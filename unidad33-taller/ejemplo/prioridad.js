import { deserializar, validarTareas } from "../../features/tareas/dominio.js";
const prioridades = ["baja", "media", "alta"];
export function validarV2(valor) {
  const base = validarTareas(valor);
  return base.map((tarea, i) => {
    if (!prioridades.includes(valor[i].prioridad))
      throw new TypeError("Prioridad inválida.");
    return { ...tarea, prioridad: valor[i].prioridad };
  });
}
export function migrarV1(texto) {
  return deserializar(texto).map((t) => ({ ...t, prioridad: "media" }));
}
export function serializarV2(tareas) {
  return JSON.stringify({ version: 2, tareas: validarV2(tareas) });
}
export function deserializarV2(texto) {
  if (typeof texto !== "string" || texto.length > 100000)
    throw new TypeError("Persistencia fuera del límite.");
  const valor = JSON.parse(texto);
  if (!valor || valor.version !== 2)
    throw new TypeError("Versión de datos no admitida.");
  return validarV2(valor.tareas);
}
export function cambiarPrioridad(tareas, id, prioridad) {
  const copia = validarV2(tareas);
  if (!prioridades.includes(prioridad))
    throw new TypeError("Prioridad inválida.");
  if (!copia.some((t) => t.id === id))
    throw new RangeError("Tarea inexistente.");
  return copia.map((t) => (t.id === id ? { ...t, prioridad } : t));
}
export function filtrarPrioridad(tareas, prioridad = "todas") {
  const copia = validarV2(tareas);
  if (prioridad !== "todas" && !prioridades.includes(prioridad))
    throw new TypeError("Filtro de prioridad inválido.");
  return copia.filter(
    (t) => prioridad === "todas" || t.prioridad === prioridad,
  );
}
