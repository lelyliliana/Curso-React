function Tarjeta({ titulo, children, acciones }) {
  return (
    <section>
      <h3>{titulo}</h3>
      <div>{children}</div>
      <div>{acciones}</div>
    </section>
  );
}
export default function App() {
  return (
    <section>
      <h2>Componer contenido</h2>
      <Tarjeta
        titulo="Ruta de estudio"
        acciones={<a href="#/laboratorio/06">Continuar con eventos</a>}
      >
        <p>El padre elige el contenido; la tarjeta aporta estructura.</p>
        <ul>
          <li>Leer</li>
          <li>Practicar</li>
        </ul>
      </Tarjeta>
    </section>
  );
}
