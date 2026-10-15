import { test } from "node:test";
import assert from "node:assert/strict";
import { serializar } from "../features/tareas/dominio.js";
import {
  migrarV1,
  serializarV2,
  deserializarV2,
  cambiarPrioridad,
  filtrarPrioridad,
} from "../unidad33-taller/ejemplo/prioridad.js";
const tareas = [
  { id: 7, titulo: "Leer", completada: true },
  { id: 9, titulo: "Leer", completada: false },
];
test("Migración v1 a v2 conserva identidad, estado y título duplicado", () => {
  const texto = serializar(tareas),
    migradas = migrarV1(texto);
  assert.deepEqual(
    migradas,
    tareas.map((t) => ({ ...t, prioridad: "media" })),
  );
  assert.deepEqual(deserializarV2(serializarV2(migradas)), migradas);
  assert.equal(texto, serializar(tareas));
});
test("Prioridad se cambia por id sin mutar y se filtra sin perder datos", () => {
  const base = migrarV1(serializar(tareas));
  const nuevas = cambiarPrioridad(base, 9, "alta");
  assert.equal(base[1].prioridad, "media");
  assert.equal(nuevas[1].completada, false);
  assert.deepEqual(
    filtrarPrioridad(nuevas, "alta").map((t) => t.id),
    [9],
  );
  assert.equal(filtrarPrioridad(nuevas).length, 2);
});
test("Migrar no convierte JSON roto o id duplicado en lista vacía", () => {
  assert.throws(() => migrarV1("{roto"));
  assert.throws(() =>
    migrarV1(JSON.stringify({ version: 1, tareas: [tareas[0], tareas[0]] })),
  );
  assert.throws(() => migrarV1(JSON.stringify({ version: 2, tareas })));
});
test("Versión y prioridades desconocidas se rechazan íntegramente", () => {
  const base = migrarV1(serializar(tareas));
  assert.throws(() => cambiarPrioridad(base, 7, "urgente"));
  assert.throws(() => cambiarPrioridad(base, 100, "alta"));
  assert.throws(() => filtrarPrioridad(base, "urgente"));
  assert.throws(() =>
    serializarV2([
      ...base,
      { id: 10, titulo: "Otro", completada: false, prioridad: "urgente" },
    ]),
  );
  assert.throws(() =>
    deserializarV2(JSON.stringify({ version: 1, tareas: base })),
  );
});
