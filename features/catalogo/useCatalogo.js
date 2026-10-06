import { useEffect, useRef, useState } from "react";
import { cargarCatalogo } from "./cliente.js";
const inicial = { fase: "idle", datos: [], categoria: null, error: null };
export function useCatalogo(cargar = cargarCatalogo) {
  const [estado, setEstado] = useState(inicial);
  const controller = useRef(null),
    solicitud = useRef(0),
    activo = useRef(true);
  useEffect(() => {
    activo.current = true;
    return () => {
      activo.current = false;
      solicitud.current += 1;
      controller.current?.abort();
    };
  }, []);
  async function iniciar(escenario = "normal") {
    controller.current?.abort();
    const actual = new AbortController();
    controller.current = actual;
    const id = ++solicitud.current;
    setEstado({ fase: "loading", datos: [], categoria: null, error: null });
    try {
      const datos = await cargar({ escenario, signal: actual.signal });
      if (activo.current && id === solicitud.current)
        setEstado({
          fase: datos.length ? "success" : "empty",
          datos,
          categoria: null,
          error: null,
        });
    } catch (error) {
      if (activo.current && id === solicitud.current)
        setEstado({
          fase: "error",
          datos: [],
          categoria: error.categoria ?? "error",
          error: error.message,
        });
    }
  }
  function cancelar() {
    controller.current?.abort();
  }
  return { estado, iniciar, cancelar };
}
