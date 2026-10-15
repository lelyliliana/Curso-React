import { useState } from "react";
import { FormularioNombre } from "./App.jsx";
export default function Solucion() {
  const [primero, setPrimero] = useState("Sin guardar"),
    [segundo, setSegundo] = useState("Sin guardar");
  return (
    <section>
      <h2>Dos formularios independientes</h2>
      <section aria-label="Primer formulario">
        <h3>Primero</h3>
        <FormularioNombre onGuardar={setPrimero} />
        <p>Último nombre del primero: {primero}</p>
      </section>
      <section aria-label="Segundo formulario">
        <h3>Segundo</h3>
        <FormularioNombre onGuardar={setSegundo} />
        <p>Último nombre del segundo: {segundo}</p>
      </section>
    </section>
  );
}
