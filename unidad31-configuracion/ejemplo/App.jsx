export default function App() {
  const nombre = import.meta.env.VITE_NOMBRE_CURSO ?? "Aprende React";
  return (
    <section>
      <h2>Configuración pública del cliente</h2>
      <p>Nombre: {nombre}</p>
      <p>Modo: {import.meta.env.MODE}</p>
      <p>Este valor se incorpora al código del cliente; no es un secreto.</p>
    </section>
  );
}
