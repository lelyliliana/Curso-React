import test from "node:test";
import assert from "node:assert/strict";
import { estadoInicial, tareasReducer } from "../features/tareas/reducer.js";
test("Reducer puro y revisión solo tras cambios válidos", () => {
  const inicio = estadoInicial();
  const accion = { type: "agregar", titulo: " Leer " };
  const a = tareasReducer(inicio, accion),
    b = tareasReducer(inicio, accion);
  assert.deepEqual(a, b);
  assert.equal(inicio.tareas.length, 0);
  assert.equal(a.revision, 1);
  const fallo = tareasReducer(a, { type: "agregar", titulo: " " });
  assert.equal(fallo.revision, 1);
  assert.equal(fallo.tareas, a.tareas);
  assert.ok(fallo.error);
  const editado = tareasReducer(a, {
    type: "editar",
    id: 1,
    titulo: "Practicar",
  });
  assert.equal(editado.tareas[0].titulo, "Practicar");
  const completo = tareasReducer(editado, { type: "alternar", id: 1 });
  assert.equal(completo.tareas[0].completada, true);
  const final = tareasReducer(completo, { type: "eliminar", id: 1 });
  assert.deepEqual(final.tareas, []);
  assert.ok(tareasReducer(final, { type: "desconocida" }).error);
});
