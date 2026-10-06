import { Link, Route, Routes, useParams, useSearchParams } from "react-router";
const datos = [
  { id: 1, titulo: "React" },
  { id: 2, titulo: "JavaScript" },
];
function Lista() {
  const [params, setParams] = useSearchParams();
  const q = params.get("q") ?? "";
  const visibles = datos.filter((r) =>
    r.titulo.toLowerCase().includes(q.toLowerCase()),
  );
  return (
    <>
      <label htmlFor="q">Buscar en URL</label>
      <input
        id="q"
        value={q}
        onChange={(e) =>
          setParams(e.target.value ? { q: e.target.value } : {}, {
            replace: true,
          })
        }
      />
      <ul>
        {visibles.map((r) => (
          <li key={r.id}>
            <Link to={`detalle/${r.id}`}>{r.titulo}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
function Detalle() {
  const { id } = useParams();
  const recurso = /^[1-9]\d*$/.test(id)
    ? datos.find((r) => r.id === Number(id))
    : null;
  return (
    <>
      <p>{recurso ? `Detalle: ${recurso.titulo}` : "Recurso no encontrado"}</p>
      <Link to="/laboratorio/18">Volver al catálogo</Link>
    </>
  );
}
export default function App() {
  return (
    <section>
      <h2>Rutas, detalle y búsqueda</h2>
      <Routes>
        <Route index element={<Lista />} />
        <Route path="detalle/:id" element={<Detalle />} />
        <Route path="*" element={<p>Ruta no encontrada</p>} />
      </Routes>
    </section>
  );
}
