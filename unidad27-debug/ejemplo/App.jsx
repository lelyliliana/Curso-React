import { useState } from "react";
export default function App() {
  const [texto, setTexto] = useState("12");
  const numero = Number(texto);
  const resultado = texto.trim() && Number.isFinite(numero) ? numero + 3 : null;
  return (
    <section>
      <h2>Inspeccionar props, estado y conversión</h2>
      <label htmlFor="valor">Número ficticio</label>
      <input
        id="valor"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <pre>
        {JSON.stringify(
          {
            texto,
            tipo: typeof texto,
            numero: Number.isFinite(numero) ? numero : null,
            resultado,
          },
          null,
          2,
        )}
      </pre>
    </section>
  );
}
