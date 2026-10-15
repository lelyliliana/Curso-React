import { test, expect, vi } from "vitest";
import { render, screen, within, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Identidad from "../unidad03-componentes/ejemplo/Solucion.jsx";
import Props from "../unidad04-props/ejemplo/Solucion.jsx";
import Fases from "../unidad08-condicional/ejemplo/Solucion.jsx";
import Formularios from "../unidad10-formularios/ejemplo/Solucion.jsx";
import { Reloj } from "../unidad13-useeffect/ejemplo/Solucion.jsx";
import Contadores from "../unidad17-custom-hooks/ejemplo/Solucion.jsx";
import Contexto from "../unidad19-context/ejemplo/Solucion.jsx";
import Reducer, { reducer } from "../unidad20-usereducer/ejemplo/Solucion.jsx";
import Filtros from "../unidad21-estado-app/ejemplo/Solucion.jsx";
import Foco from "../unidad23-accesibilidad/ejemplo/Solucion.jsx";
import Debug from "../unidad27-debug/ejemplo/App.jsx";

test("Recrear una identidad reinicia solo el contador elegido", async () => {
  const user = userEvent.setup();
  render(<Identidad />);
  await user.click(screen.getByRole("button", { name: "Sumar Primero" }));
  await user.click(screen.getByRole("button", { name: "Sumar Segundo" }));
  await user.click(screen.getByRole("button", { name: "Recrear Primero" }));
  expect(screen.getByRole("region", { name: "Primero" }).textContent).toContain(
    "Cantidad: 0",
  );
  expect(screen.getByRole("region", { name: "Segundo" }).textContent).toContain(
    "Cantidad: 1",
  );
});
test("Props distingue cero, ausencia, desconocido y tipo inválido", () => {
  render(<Props />);
  expect(screen.getByText("Cupos: 0")).toBeTruthy();
  expect(screen.getAllByText("Cupos: 20")).toHaveLength(2);
  expect(screen.getByText("Cupos desconocidos")).toBeTruthy();
  expect(screen.getAllByText("Dato de cupos inválido")).toHaveLength(2);
});
test("Denegado retira una lista exitosa y vacío conserva otro significado", async () => {
  const user = userEvent.setup();
  render(<Fases />);
  await user.selectOptions(screen.getByLabelText("Estado simulado"), "success");
  expect(screen.getAllByRole("listitem")).toHaveLength(2);
  await user.selectOptions(screen.getByLabelText("Estado simulado"), "denied");
  expect(screen.queryByRole("list")).toBeNull();
  expect(screen.getByRole("alert").textContent).toContain("permiso");
  await user.selectOptions(screen.getByLabelText("Estado simulado"), "empty");
  expect(screen.getByRole("status").textContent).toBe("No hay resultados");
});
test("Dos formularios rechazan un carácter y guardan de forma independiente", async () => {
  const user = userEvent.setup();
  render(<Formularios />);
  const a = within(screen.getByRole("region", { name: "Primer formulario" }));
  const b = within(screen.getByRole("region", { name: "Segundo formulario" }));
  const campo = a.getByLabelText("Nombre ficticio");
  expect(campo.id).not.toBe(b.getByLabelText("Nombre ficticio").id);
  await user.type(campo, "A");
  await user.click(a.getByRole("button", { name: "Guardar nombre" }));
  expect(a.getByRole("alert").textContent).toContain("2 a 40");
  expect(a.getByText("Último nombre del primero: Sin guardar")).toBeTruthy();
  await user.clear(campo);
  await user.type(campo, " Ana ");
  await user.click(a.getByRole("button", { name: "Guardar nombre" }));
  expect(a.getByText("Último nombre del primero: Ana")).toBeTruthy();
  expect(b.getByText("Último nombre del segundo: Sin guardar")).toBeTruthy();
});
test("Cambiar frecuencia conserva ticks, limpia el intervalo viejo y desmontar libera", () => {
  vi.useFakeTimers();
  try {
    const vista = render(<Reloj intervaloMs={1000} />);
    act(() => vi.advanceTimersByTime(1000));
    expect(screen.getByRole("status").textContent).toBe("Ticks: 1");
    vista.rerender(<Reloj intervaloMs={200} />);
    act(() => vi.advanceTimersByTime(1000));
    expect(screen.getByRole("status").textContent).toBe("Ticks: 6");
    expect(vi.getTimerCount()).toBe(1);
    vista.unmount();
    expect(vi.getTimerCount()).toBe(0);
  } finally {
    vi.useRealTimers();
  }
});
test("Hook mantiene mínimo, independencia y reinicio con la prop actual", async () => {
  const user = userEvent.setup();
  render(<Contadores />);
  await user.click(
    screen.getByRole("button", { name: "Restar A", exact: true }),
  );
  expect(
    screen.getByRole("region", { name: "Control A" }).textContent,
  ).toContain("Cantidad: 0");
  await user.click(
    screen.getByRole("button", { name: "Sumar C", exact: true }),
  );
  await user.click(
    screen.getByRole("button", { name: "Cambiar inicio de C a 50" }),
  );
  expect(
    screen.getByRole("region", { name: "Control C" }).textContent,
  ).toContain("Cantidad: 101");
  await user.click(
    screen.getByRole("button", { name: "Reiniciar C", exact: true }),
  );
  expect(
    screen.getByRole("region", { name: "Control C" }).textContent,
  ).toContain("Cantidad: 50");
  expect(
    screen.getByRole("region", { name: "Control B" }).textContent,
  ).toContain("Cantidad: 10");
});
test("Context comparte entre consumidores internos y permite ausencia explícita", async () => {
  const user = userEvent.setup();
  render(<Contexto />);
  await user.click(screen.getByRole("button", { name: "Cambiar desde A" }));
  expect(screen.getByText("A: oscuro")).toBeTruthy();
  expect(screen.getByText("B: oscuro")).toBeTruthy();
  expect(
    screen.getByText("Fuera: tema no disponible (sin proveedor)."),
  ).toBeTruthy();
});
test("La transición sumarDos es pura y está disponible desde la interfaz", async () => {
  expect(reducer(4, { type: "sumarDos" })).toBe(6);
  expect(reducer(4, { type: "sumarDos" })).toBe(6);
  const user = userEvent.setup();
  render(<Reducer />);
  await user.click(screen.getByRole("button", { name: "restar", exact: true }));
  expect(screen.getByRole("status").textContent).toBe("Cantidad: 0");
  await user.click(
    screen.getByRole("button", { name: "sumarDos", exact: true }),
  );
  expect(screen.getByRole("status").textContent).toBe("Cantidad: 2");
});
test("Combinar búsqueda y estado deriva la vista sin destruir la colección", async () => {
  const user = userEvent.setup();
  render(<Filtros />);
  await user.type(screen.getByLabelText("Buscar título"), "pra");
  await user.selectOptions(screen.getByLabelText("Estado"), "pendientes");
  expect(screen.getByRole("status").textContent).toBe("0 de 2 tareas");
  await user.selectOptions(screen.getByLabelText("Estado"), "completadas");
  expect(screen.getByRole("list").textContent).toBe("Practicar");
  await user.clear(screen.getByLabelText("Buscar título"));
  await user.selectOptions(screen.getByLabelText("Estado"), "todas");
  expect(screen.getAllByRole("listitem")).toHaveLength(2);
});
test("Limpiar anuncia cantidad real y devuelve foco a un elemento montado", async () => {
  const user = userEvent.setup();
  render(<Foco />);
  const agregar = screen.getByRole("button", { name: "Agregar recurso" });
  for (let i = 0; i < 3; i++) await user.click(agregar);
  await user.click(screen.getByRole("button", { name: "Limpiar recursos" }));
  expect(screen.getByRole("status").textContent).toContain(
    "Se eliminaron 3 recursos",
  );
  expect(document.activeElement).toBe(agregar);
  await user.click(screen.getByRole("button", { name: "Limpiar recursos" }));
  expect(screen.getByRole("status").textContent).toContain(
    "Se eliminaron 0 recursos",
  );
});
test("Depuración: vacío o espacios producen null y 12 produce el número 15", async () => {
  const user = userEvent.setup();
  const { container } = render(<Debug />);
  const campo = screen.getByLabelText("Número ficticio");
  const resultado = () =>
    JSON.parse(container.querySelector("pre").textContent).resultado;
  expect(resultado()).toBe(15);
  await user.clear(campo);
  expect(resultado()).toBeNull();
  await user.type(campo, " ");
  expect(resultado()).toBeNull();
  await user.clear(campo);
  await user.type(campo, "12abc");
  expect(resultado()).toBeNull();
});

test("Una extensión inexistente muestra ausencia sin intentar montar propiedades heredadas", async () => {
  const { MemoryRouter } = await import("react-router");
  const { default: App } = await import("../src/App.jsx");
  render(
    <MemoryRouter initialEntries={["/solucion/constructor"]}>
      <App />
    </MemoryRouter>,
  );
  expect(
    screen.getByRole("heading", { name: "Extensión no encontrada" }),
  ).toBeTruthy();
});
