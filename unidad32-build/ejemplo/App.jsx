import { Link } from "react-router";
export default function App() {
  return (
    <section>
      <h2>Build y rutas en hosting estático</h2>
      <p>
        Los enlaces con hash conservan rutas internas sin exigir reescrituras
        del servidor.
      </p>
      <Link to="/proyecto">Abrir proyecto construido</Link>
      <p>
        La API local sigue necesitando el proceso de laboratorio; dist no la
        contiene.
      </p>
    </section>
  );
}
