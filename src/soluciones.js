import { lazy } from "react";
export const soluciones = {
  "03": lazy(() => import("../unidad03-componentes/ejemplo/Solucion.jsx")),
  "04": lazy(() => import("../unidad04-props/ejemplo/Solucion.jsx")),
  "08": lazy(() => import("../unidad08-condicional/ejemplo/Solucion.jsx")),
  10: lazy(() => import("../unidad10-formularios/ejemplo/Solucion.jsx")),
  13: lazy(() => import("../unidad13-useeffect/ejemplo/Solucion.jsx")),
  17: lazy(() => import("../unidad17-custom-hooks/ejemplo/Solucion.jsx")),
  19: lazy(() => import("../unidad19-context/ejemplo/Solucion.jsx")),
  20: lazy(() => import("../unidad20-usereducer/ejemplo/Solucion.jsx")),
  21: lazy(() => import("../unidad21-estado-app/ejemplo/Solucion.jsx")),
  23: lazy(() => import("../unidad23-accesibilidad/ejemplo/Solucion.jsx")),
};
