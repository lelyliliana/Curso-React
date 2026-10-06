import Tareas from "../../features/tareas/Tareas.jsx";
export default function App() {
  return (
    <section>
      <h2>Una feature con límites explícitos</h2>
      <p>
        Reglas, reducer, almacenamiento e interfaz se encuentran en
        features/tareas.
      </p>
      <Tareas />
    </section>
  );
}
