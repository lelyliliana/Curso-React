import { useEffect, useId, useReducer, useRef, useState } from "react";
import { filtrarTareas, validarTitulo } from "./dominio.js";
import { estadoInicial, tareasReducer } from "./reducer.js";
import { leer, guardar } from "./almacenamiento.js";
function inicializar() {
  try {
    return estadoInicial(leer(localStorage));
  } catch {
    return estadoInicial(
      [],
      "No se pudo leer el guardado local. No se sobrescribió durante la carga.",
    );
  }
}
export default function Tareas() {
  const [estado, dispatch] = useReducer(tareasReducer, null, inicializar);
  const [titulo, setTitulo] = useState(""),
    [editando, setEditando] = useState(null),
    [filtro, setFiltro] = useState("todas"),
    [buscar, setBuscar] = useState("");
  const [errorCampo, setErrorCampo] = useState(""),
    [errorGuardado, setErrorGuardado] = useState("");
  const entrada = useRef(null);
  const id = useId();
  useEffect(() => {
    if (estado.revision === 0) return;
    try {
      guardar(localStorage, estado.tareas);
      setErrorGuardado("");
    } catch {
      setErrorGuardado("El cambio está en memoria, pero no se pudo guardar.");
    }
  }, [estado.tareas, estado.revision]);
  const visibles = filtrarTareas(estado.tareas, filtro, buscar);
  function salir() {
    setEditando(null);
    setTitulo("");
    setErrorCampo("");
    entrada.current?.focus();
  }
  function enviar(event) {
    event.preventDefault();
    try {
      validarTitulo(titulo);
      if (editando === null && estado.tareas.length >= 200)
        throw new RangeError("Límite de 200 tareas.");
    } catch (error) {
      setErrorCampo(error.message);
      entrada.current?.focus();
      return;
    }
    dispatch(
      editando === null
        ? { type: "agregar", titulo }
        : { type: "editar", id: editando, titulo },
    );
    salir();
  }
  function actuar(type, tarea) {
    if (type === "editar") {
      setEditando(tarea.id);
      setTitulo(tarea.titulo);
      setErrorCampo("");
      entrada.current?.focus();
      return;
    }
    dispatch({ type, id: tarea.id });
    if (editando === tarea.id) salir();
    entrada.current?.focus();
  }
  const error = errorCampo || estado.error || errorGuardado;
  return (
    <section aria-label="Gestor de tareas">
      <h2>Gestor de tareas</h2>
      <p>
        Usa tareas ficticias. Se guardan solo en este navegador y origen, cuando
        Storage está disponible.
      </p>
      <form onSubmit={enviar}>
        <label htmlFor={id}>Título (1 a 80 caracteres)</label>
        <input
          ref={entrada}
          id={id}
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
          maxLength={80}
          aria-invalid={errorCampo ? true : undefined}
          aria-describedby={`${id}-error`}
        />
        <button>
          {editando === null ? "Agregar tarea" : "Guardar cambios"}
        </button>
        {editando !== null && (
          <button type="button" onClick={salir}>
            Cancelar edición
          </button>
        )}
      </form>
      <p id={`${id}-error`} role="alert">
        {error}
      </p>
      <div className="barra">
        <label htmlFor={`${id}-filtro`}>Estado</label>
        <select
          id={`${id}-filtro`}
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        >
          <option value="todas">Todas</option>
          <option value="pendientes">Pendientes</option>
          <option value="completadas">Completadas</option>
        </select>
        <label htmlFor={`${id}-buscar`}>Buscar en títulos</label>
        <input
          id={`${id}-buscar`}
          type="search"
          value={buscar}
          onChange={(e) => setBuscar(e.target.value)}
        />
      </div>
      <p role="status">
        {estado.mensaje} {visibles.length} de {estado.tareas.length} tareas
        visibles.
      </p>
      <ul>
        {visibles.map((t) => (
          <li key={t.id}>
            <span>
              {t.titulo} ({t.completada ? "completada" : "pendiente"})
            </span>
            {[
              ["alternar", t.completada ? "Marcar pendiente" : "Completar"],
              ["editar", "Editar"],
              ["eliminar", "Eliminar"],
            ].map(([accion, texto]) => (
              <button
                key={accion}
                type="button"
                aria-label={`${texto}: ${t.titulo}`}
                onClick={() => actuar(accion, t)}
              >
                {texto}
              </button>
            ))}
          </li>
        ))}
      </ul>
    </section>
  );
}
