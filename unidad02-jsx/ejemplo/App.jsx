export default function App() {
  const persona = { nombre: "Ana", activo: true };
  const texto = "<img src=x onerror=alert(1)>";
  return (
    <section>
      <h2>Expresiones en JSX</h2>
      <p>
        {persona.nombre}: {persona.activo ? "activa" : "inactiva"}
      </p>
      <p>{texto}</p>
      <p className="nota">{0} es un valor que React muestra.</p>
    </section>
  );
}
