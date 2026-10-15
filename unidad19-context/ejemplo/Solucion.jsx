import { createContext, useContext, useState } from "react";
const Tema = createContext(null);
function Vista({ nombre }) {
  const contexto = useContext(Tema);
  if (contexto === null)
    return <p>{nombre}: tema no disponible (sin proveedor).</p>;
  return (
    <section
      aria-label={nombre}
      className={contexto.tema === "oscuro" ? "oscuro" : ""}
    >
      <p>
        {nombre}: {contexto.tema}
      </p>
      <button type="button" onClick={contexto.cambiar}>
        Cambiar desde {nombre}
      </button>
    </section>
  );
}
export default function Solucion() {
  const [tema, setTema] = useState("claro");
  return (
    <section>
      <h2>Alcance de un proveedor</h2>
      <Tema
        value={{
          tema,
          cambiar: () => setTema((t) => (t === "claro" ? "oscuro" : "claro")),
        }}
      >
        <Vista nombre="A" />
        <Vista nombre="B" />
      </Tema>
      <Vista nombre="Fuera" />
    </section>
  );
}
