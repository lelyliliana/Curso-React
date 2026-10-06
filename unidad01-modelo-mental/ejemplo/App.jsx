import { useState } from "react";
export default function App() {
  const [nombre, setNombre] = useState("Ana");
  const saludo = `Hola, ${nombre}`;
  return (
    <section>
      <h2>Interfaz derivada del estado</h2>
      <label htmlFor="nombre">Nombre ficticio</label>
      <input
        id="nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <p role="status">{saludo}</p>
    </section>
  );
}
