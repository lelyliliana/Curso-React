import { useActionState, useId } from "react";
async function procesarNombre(anterior, formData) {
  const nombre = String(formData.get("nombre") ?? "").trim();
  if (nombre.length < 2 || nombre.length > 40)
    return { error: "Nombre de 2 a 40 caracteres.", mensaje: "" };
  await new Promise((resolve) => setTimeout(resolve, 200));
  return { error: "", mensaje: `Acción local completada: ${nombre}` };
}
export default function AccionNombre() {
  const [estado, accion, pendiente] = useActionState(procesarNombre, {
    error: "",
    mensaje: "",
  });
  const id = useId();
  return (
    <section>
      <h3>Acción de formulario en React 19</h3>
      <form action={accion}>
        <label htmlFor={id}>Nombre para acción local</label>
        <input
          id={id}
          name="nombre"
          required
          maxLength={40}
          aria-describedby={`${id}-error`}
        />
        <button disabled={pendiente}>
          {pendiente ? "Procesando nombre…" : "Procesar nombre"}
        </button>
      </form>
      <p id={`${id}-error`} role="alert">
        {estado.error}
      </p>
      <p role="status">
        {pendiente ? "Procesando acción local…" : estado.mensaje}
      </p>
      <p>La demora es simulada; no se guarda ni envía a un servidor.</p>
    </section>
  );
}
