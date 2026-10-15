function Ficha({ titulo, cupos = 20 }) {
  const texto =
    cupos === null
      ? "Cupos desconocidos"
      : Number.isInteger(cupos) && cupos >= 0
        ? `Cupos: ${cupos}`
        : "Dato de cupos inválido";
  return (
    <section>
      <h3>{titulo}</h3>
      <p>{texto}</p>
    </section>
  );
}
export default function Solucion() {
  return (
    <section>
      <h2>Validar sin perder el cero</h2>
      <Ficha titulo="Cero" cupos={0} />
      <Ficha titulo="Ausente" />
      <Ficha titulo="Undefined" cupos={undefined} />
      <Ficha titulo="Desconocido" cupos={null} />
      <Ficha titulo="Negativo" cupos={-1} />
      <Ficha titulo="Cadena" cupos="3" />
    </section>
  );
}
