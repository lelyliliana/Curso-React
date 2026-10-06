import {
  crearTarea,
  cambiarTarea,
  eliminarTarea,
  validarTareas,
} from "./dominio.js";
export function estadoInicial(tareas = [], error = "") {
  return {
    tareas: validarTareas(tareas),
    revision: 0,
    error,
    mensaje: "Listo para trabajar.",
  };
}
export function tareasReducer(estado, accion) {
  try {
    let tareas, mensaje;
    switch (accion.type) {
      case "agregar":
        tareas = crearTarea(estado.tareas, accion.titulo);
        mensaje = "Tarea agregada.";
        break;
      case "editar":
        tareas = cambiarTarea(estado.tareas, accion.id, {
          titulo: accion.titulo,
        });
        mensaje = "Tarea actualizada.";
        break;
      case "alternar": {
        const actual = estado.tareas.find((t) => t.id === accion.id);
        if (!actual) throw new RangeError("Tarea inexistente.");
        tareas = cambiarTarea(estado.tareas, accion.id, {
          completada: !actual.completada,
        });
        mensaje = "Estado actualizado.";
        break;
      }
      case "eliminar":
        tareas = eliminarTarea(estado.tareas, accion.id);
        mensaje = "Tarea eliminada.";
        break;
      default:
        throw new TypeError("Acción no admitida.");
    }
    return { tareas, revision: estado.revision + 1, error: "", mensaje };
  } catch (error) {
    return { ...estado, error: error.message };
  }
}
