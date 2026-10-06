function Ficha({ titulo, cupos = 20 }) {
  return (
    <section>
      <h3>{titulo}</h3>
      <p>Cupos: {cupos}</p>
    </section>
  );
}
export default function App() {
  return (
    <section>
      <h2>Props y valores por defecto</h2>
      <Ficha titulo="JavaScript" cupos={0} />
      <Ficha titulo="React" />
      <Ficha titulo="Otro curso" cupos={null} />
    </section>
  );
}
