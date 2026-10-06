import Catalogo from "../../features/catalogo/Catalogo.jsx";
export default function App() {
  return (
    <section>
      <h2>Prueba de un flujo asíncrono</h2>
      <p>
        Antes de esperar éxito, observa loading y prueba una respuesta vacía o
        fallida.
      </p>
      <Catalogo />
    </section>
  );
}
