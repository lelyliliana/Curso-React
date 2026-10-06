import { createContext, useContext, useState } from "react";
const Tema = createContext(null);
function Vista() {
  const { tema, cambiar } = useContext(Tema);
  return (
    <div className={tema === "oscuro" ? "oscuro" : ""}>
      <p>Tema: {tema}</p>
      <button type="button" onClick={cambiar}>
        Cambiar tema
      </button>
    </div>
  );
}
export default function App() {
  const [tema, setTema] = useState("claro");
  return (
    <section>
      <h2>Context dentro de un proveedor</h2>
      <Tema
        value={{
          tema,
          cambiar: () => setTema((t) => (t === "claro" ? "oscuro" : "claro")),
        }}
      >
        <Vista />
      </Tema>
    </section>
  );
}
