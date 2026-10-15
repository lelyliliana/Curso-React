import { lazy, Suspense, useLayoutEffect, useRef, useState } from "react";
import { Link, Route, Routes, useLocation, useParams } from "react-router";
import unidades from "./unidades.json";
import { soluciones } from "./soluciones.js";
import LimiteError from "../components/LimiteError.jsx";
const Proyecto = lazy(() => import("../ejemplos/app-referencia/src/App.jsx"));
const Lab0 = lazy(() => import("../unidad00-entorno/ejemplo/App.jsx"));
const Lab1 = lazy(() => import("../unidad01-modelo-mental/ejemplo/App.jsx"));
const Lab2 = lazy(() => import("../unidad02-jsx/ejemplo/App.jsx"));
const Lab3 = lazy(() => import("../unidad03-componentes/ejemplo/App.jsx"));
const Lab4 = lazy(() => import("../unidad04-props/ejemplo/App.jsx"));
const Lab5 = lazy(() => import("../unidad05-composicion/ejemplo/App.jsx"));
const Lab6 = lazy(() => import("../unidad06-eventos/ejemplo/App.jsx"));
const Lab7 = lazy(() => import("../unidad07-usestate/ejemplo/App.jsx"));
const Lab8 = lazy(() => import("../unidad08-condicional/ejemplo/App.jsx"));
const Lab9 = lazy(() => import("../unidad09-listas-keys/ejemplo/App.jsx"));
const Lab10 = lazy(() => import("../unidad10-formularios/ejemplo/App.jsx"));
const Lab11 = lazy(
  () => import("../unidad11-estado-compartido/ejemplo/App.jsx"),
);
const Lab12 = lazy(() => import("../unidad12-efectos/ejemplo/App.jsx"));
const Lab13 = lazy(() => import("../unidad13-useeffect/ejemplo/App.jsx"));
const Lab14 = lazy(() => import("../unidad14-datos-remotos/ejemplo/App.jsx"));
const Lab15 = lazy(() => import("../unidad15-estados-remotos/ejemplo/App.jsx"));
const Lab16 = lazy(() => import("../unidad16-cancelacion/ejemplo/App.jsx"));
const Lab17 = lazy(() => import("../unidad17-custom-hooks/ejemplo/App.jsx"));
const Lab18 = lazy(() => import("../unidad18-routing/ejemplo/App.jsx"));
const Lab19 = lazy(() => import("../unidad19-context/ejemplo/App.jsx"));
const Lab20 = lazy(() => import("../unidad20-usereducer/ejemplo/App.jsx"));
const Lab21 = lazy(() => import("../unidad21-estado-app/ejemplo/App.jsx"));
const Lab22 = lazy(() => import("../unidad22-persistencia/ejemplo/App.jsx"));
const Lab23 = lazy(() => import("../unidad23-accesibilidad/ejemplo/App.jsx"));
const Lab24 = lazy(() => import("../unidad24-pruebas/ejemplo/App.jsx"));
const Lab25 = lazy(() => import("../unidad25-pruebas-flujos/ejemplo/App.jsx"));
const Lab26 = lazy(() => import("../unidad26-errores/ejemplo/App.jsx"));
const Lab27 = lazy(() => import("../unidad27-debug/ejemplo/App.jsx"));
const Lab28 = lazy(() => import("../unidad28-rendimiento/ejemplo/App.jsx"));
const Lab29 = lazy(() => import("../unidad29-memoizacion/ejemplo/App.jsx"));
const Lab30 = lazy(() => import("../unidad30-arquitectura/ejemplo/App.jsx"));
const Lab31 = lazy(() => import("../unidad31-configuracion/ejemplo/App.jsx"));
const Lab32 = lazy(() => import("../unidad32-build/ejemplo/App.jsx"));
const laboratorios = {
  "00": Lab0,
  "01": Lab1,
  "02": Lab2,
  "03": Lab3,
  "04": Lab4,
  "05": Lab5,
  "06": Lab6,
  "07": Lab7,
  "08": Lab8,
  "09": Lab9,
  10: Lab10,
  11: Lab11,
  12: Lab12,
  13: Lab13,
  14: Lab14,
  15: Lab15,
  16: Lab16,
  17: Lab17,
  18: Lab18,
  19: Lab19,
  20: Lab20,
  21: Lab21,
  22: Lab22,
  23: Lab23,
  24: Lab24,
  25: Lab25,
  26: Lab26,
  27: Lab27,
  28: Lab28,
  29: Lab29,
  30: Lab30,
  31: Lab31,
  32: Lab32,
};
function Indice() {
  return (
    <>
      <h1>Laboratorios del curso React</h1>
      <p>Lee la unidad, predice el resultado y después abre su laboratorio.</p>
      <ol>
        {unidades.map((u) => (
          <li key={u.id}>
            {laboratorios[u.id] ? (
              <Link to={`/laboratorio/${u.id}`}>{u.titulo}</Link>
            ) : (
              <Link to="/proyecto">{u.titulo} (proyecto)</Link>
            )}
          </li>
        ))}
      </ol>
    </>
  );
}
function ExtensionResuelta() {
  const { id } = useParams();
  const Componente = Object.hasOwn(soluciones, id) ? soluciones[id] : null;
  if (!Componente) return <h1>Extensión no encontrada</h1>;
  return (
    <>
      <h1>Extensión resuelta de la Unidad {id}</h1>
      <p>
        <Link to={`/laboratorio/${id}`}>Volver al laboratorio original</Link>
      </p>
      <Componente />
    </>
  );
}
function Laboratorio() {
  const { id } = useParams();
  const u = unidades.find((u) => u.id === id),
    Componente = laboratorios[id];
  const [revision, setRevision] = useState(0);
  if (!u || !Componente) return <h1>Laboratorio no encontrado</h1>;
  return (
    <>
      <h1>{u.titulo}</h1>
      <p>
        <a
          href={`https://github.com/lelyliliana/Curso-React/blob/main/${u.carpeta}/README.md`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Leer lección y práctica
        </a>
      </p>
      <nav aria-label="Recorrido de laboratorios">
        {Number(id) > 0 && (
          <Link to={`/laboratorio/${String(Number(id) - 1).padStart(2, "0")}`}>
            Anterior
          </Link>
        )}
        <Link to="/">Índice</Link>
        {Number(id) < 32 ? (
          <Link to={`/laboratorio/${String(Number(id) + 1).padStart(2, "0")}`}>
            Siguiente
          </Link>
        ) : (
          <Link to="/proyecto">Taller y proyecto</Link>
        )}
      </nav>
      {soluciones[id] && (
        <p>
          <Link to={`/solucion/${id}`}>Abrir extensión resuelta</Link>
        </p>
      )}
      <LimiteError
        key={`${id}-${revision}`}
        onReintentar={() => setRevision((n) => n + 1)}
      >
        <Componente />
      </LimiteError>
    </>
  );
}
export default function App() {
  const location = useLocation(),
    contenido = useRef(null);
  useLayoutEffect(() => {
    const u = unidades.find(
      (u) =>
        location.pathname.startsWith(`/laboratorio/${u.id}`) ||
        location.pathname === `/solucion/${u.id}`,
    );
    document.title = u
      ? u.titulo
      : location.pathname.includes("/proyecto/catalogo")
        ? "Catálogo (proyecto React)"
        : location.pathname.includes("/proyecto")
          ? "Tareas (proyecto React)"
          : "Laboratorios React";
    contenido.current?.focus();
  }, [location.pathname]);
  return (
    <>
      <header>
        <Link to="/">Aprende React con Leli</Link>
        <nav aria-label="Navegación general">
          <Link to="/">Laboratorios</Link>
          <Link to="/proyecto">Proyecto final</Link>
          <a
            href="https://github.com/lelyliliana/Curso-React"
            target="_blank"
            rel="noopener noreferrer"
          >
            Curso en GitHub
          </a>
        </nav>
      </header>
      <main ref={contenido} tabIndex={-1}>
        <Suspense fallback={<p role="status">Cargando componente…</p>}>
          <Routes>
            <Route index element={<Indice />} />
            <Route
              path="laboratorio/:id/*"
              element={
                <Laboratorio
                  key={location.pathname.split("/").slice(0, 3).join("/")}
                />
              }
            />
            <Route
              path="solucion/:id"
              element={<ExtensionResuelta key={location.pathname} />}
            />
            <Route path="proyecto/*" element={<Proyecto />} />
            <Route path="*" element={<h1>Ruta no encontrada</h1>} />
          </Routes>
        </Suspense>
      </main>
      <footer>Ejemplos educativos con datos ficticios.</footer>
    </>
  );
}
