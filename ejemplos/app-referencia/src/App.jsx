import { NavLink, Route, Routes, useLocation } from "react-router";
import { useEffect, useRef } from "react";
import Tareas from "../../../features/tareas/Tareas.jsx";
import Catalogo from "../../../features/catalogo/Catalogo.jsx";
export default function Proyecto() {
  const location = useLocation(),
    titulo = useRef(null);
  useEffect(() => {
    document.title = location.pathname.includes("catalogo")
      ? "Catálogo (proyecto React)"
      : "Tareas (proyecto React)";
    titulo.current?.focus();
  }, [location.pathname]);
  return (
    <>
      <h1 ref={titulo} tabIndex={-1}>
        Proyecto de estudio
      </h1>
      <nav aria-label="Vistas del proyecto">
        <NavLink end to="/proyecto">
          Tareas
        </NavLink>{" "}
        <NavLink to="/proyecto/catalogo">Catálogo</NavLink>
      </nav>
      <Routes>
        <Route index element={<Tareas />} />
        <Route path="catalogo" element={<Catalogo />} />
        <Route
          path="*"
          element={<p role="status">Vista del proyecto no encontrada.</p>}
        />
      </Routes>
    </>
  );
}
