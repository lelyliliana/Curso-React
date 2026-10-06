import { useState } from "react";
import LimiteError from "../../components/LimiteError.jsx";
function Widget({ fallar }) {
  if (fallar) throw new Error("Fallo deliberado del laboratorio");
  return <p>Widget operativo.</p>;
}
export default function App() {
  const [fallar, setFallar] = useState(false),
    [revision, setRevision] = useState(0),
    [errorEvento, setErrorEvento] = useState("");
  function reiniciar() {
    setFallar(false);
    setRevision((n) => n + 1);
  }
  return (
    <section>
      <h2>Aislar un fallo de render</h2>
      <p>Contenido externo preservado.</p>
      <button type="button" onClick={() => setFallar(true)}>
        Provocar fallo de render
      </button>
      <LimiteError key={revision} onReintentar={reiniciar}>
        <Widget fallar={fallar} />
      </LimiteError>
      <button
        type="button"
        onClick={() => {
          try {
            throw new Error("Fallo de acción");
          } catch (error) {
            setErrorEvento(error.message);
          }
        }}
      >
        Provocar fallo de evento
      </button>
      <p role="alert">{errorEvento}</p>
    </section>
  );
}
