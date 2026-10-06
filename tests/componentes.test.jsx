import { test, expect, vi } from "vitest";
import { render, screen, waitFor, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { StrictMode } from "react";
import { FormularioNombre } from "../unidad10-formularios/ejemplo/App.jsx";
import Tareas from "../features/tareas/Tareas.jsx";
import Catalogo from "../features/catalogo/Catalogo.jsx";
import { CLAVE } from "../features/tareas/almacenamiento.js";

test("Formulario informa entrada inválida y normaliza la válida", async () => {
  const user = userEvent.setup(),
    guardar = vi.fn();
  render(<FormularioNombre onGuardar={guardar} />);
  const entrada = screen.getByLabelText("Nombre ficticio");
  await user.type(entrada, " ");
  await user.click(screen.getByRole("button", { name: "Guardar nombre" }));
  expect(screen.getByRole("alert").textContent).toContain("2 a 40");
  expect(guardar).not.toHaveBeenCalled();
  expect(document.activeElement).toBe(entrada);
  await user.clear(entrada);
  await user.type(entrada, " Ana ");
  await user.click(screen.getByRole("button", { name: "Guardar nombre" }));
  expect(guardar).toHaveBeenCalledWith("Ana");
  expect(screen.getByRole("status").textContent).toContain("Recibido: Ana");
});
test("Formulario respeta el máximo introducido desde la interfaz", async () => {
  const user = userEvent.setup(),
    guardar = vi.fn();
  render(<FormularioNombre onGuardar={guardar} />);
  await user.type(screen.getByLabelText("Nombre ficticio"), "a".repeat(41));
  await user.click(screen.getByRole("button", { name: "Guardar nombre" }));
  expect(guardar).toHaveBeenCalledWith("a".repeat(40));
});
test("CRUD desde controles y eliminación por id en vista filtrada", async () => {
  const user = userEvent.setup();
  render(
    <StrictMode>
      <Tareas />
    </StrictMode>,
  );
  const entrada = screen.getByLabelText("Título (1 a 80 caracteres)");
  for (const nombre of ["Leer", "Practicar"]) {
    await user.type(entrada, nombre);
    await user.click(screen.getByRole("button", { name: "Agregar tarea" }));
  }
  await user.click(screen.getByRole("button", { name: "Completar: Leer" }));
  await user.selectOptions(screen.getByLabelText("Estado"), "completadas");
  expect(
    screen.queryByRole("button", { name: "Editar: Practicar" }),
  ).toBeNull();
  await user.click(screen.getByRole("button", { name: "Editar: Leer" }));
  await user.clear(entrada);
  await user.type(entrada, "Estudiar");
  await user.click(screen.getByRole("button", { name: "Guardar cambios" }));
  await user.click(screen.getByRole("button", { name: "Editar: Estudiar" }));
  await user.clear(entrada);
  await user.type(entrada, "No guardar");
  await user.click(screen.getByRole("button", { name: "Cancelar edición" }));
  expect(screen.getByRole("button", { name: "Editar: Estudiar" })).toBeTruthy();
  await user.click(screen.getByRole("button", { name: "Eliminar: Estudiar" }));
  await user.selectOptions(screen.getByLabelText("Estado"), "todas");
  expect(
    screen.getByRole("button", { name: "Editar: Practicar" }),
  ).toBeTruthy();
  expect(screen.queryByRole("button", { name: "Editar: Estudiar" })).toBeNull();
  expect(
    JSON.parse(localStorage.getItem(CLAVE)).tareas.map((t) => t.titulo),
  ).toEqual(["Practicar"]);
});
test("Carga corrupta no escribe durante montaje y texto no crea HTML", async () => {
  localStorage.setItem(CLAVE, "{corrupto");
  const user = userEvent.setup();
  render(
    <StrictMode>
      <Tareas />
    </StrictMode>,
  );
  expect(localStorage.getItem(CLAVE)).toBe("{corrupto");
  expect(screen.getByRole("alert").textContent).toContain("No se pudo leer");
  await user.type(
    screen.getByLabelText("Título (1 a 80 caracteres)"),
    "<img src=x onerror=alert(1)>",
  );
  await user.click(screen.getByRole("button", { name: "Agregar tarea" }));
  expect(document.querySelectorAll("img").length).toBe(0);
  expect(screen.getByRole("list").textContent).toContain("<img");
});
test("Fallo de guardado conserva tareas en memoria", async () => {
  const spy = vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
    throw new DOMException("Cuota", "QuotaExceededError");
  });
  try {
    const user = userEvent.setup();
    render(<Tareas />);
    await user.type(
      screen.getByLabelText("Título (1 a 80 caracteres)"),
      "En memoria",
    );
    await user.click(screen.getByRole("button", { name: "Agregar tarea" }));
    expect(screen.getByRole("list").textContent).toContain("En memoria");
    expect(screen.getByRole("alert").textContent).toContain(
      "no se pudo guardar",
    );
  } finally {
    spy.mockRestore();
  }
});
test("Loading, éxito y vacío con un cliente sustituido", async () => {
  let resolver;
  const cargar = vi
    .fn()
    .mockImplementationOnce(
      () =>
        new Promise((r) => {
          resolver = r;
        }),
    )
    .mockResolvedValueOnce([]);
  const user = userEvent.setup();
  render(<Catalogo cargar={cargar} />);
  await user.click(screen.getByRole("button", { name: "Cargar catálogo" }));
  expect(screen.getByRole("status").textContent).toBe("Cargando…");
  expect(screen.getByRole("list").getAttribute("aria-busy")).toBe("true");
  resolver([{ id: 1, titulo: "React" }]);
  await waitFor(() =>
    expect(screen.getByRole("status").textContent).toBe("1 recursos cargados."),
  );
  await user.click(screen.getByRole("button", { name: "Cargar catálogo" }));
  await waitFor(() =>
    expect(screen.getByRole("status").textContent).toBe("No hay resultados."),
  );
});
test("Resultado obsoleto ignorado aunque el cliente no atienda abort", async () => {
  const resolver = [];
  const cargar = () => new Promise((r) => resolver.push(r));
  const user = userEvent.setup();
  render(
    <StrictMode>
      <Catalogo cargar={cargar} />
    </StrictMode>,
  );
  await user.click(screen.getByRole("button", { name: "Cargar catálogo" }));
  await user.click(screen.getByRole("button", { name: "Cargar catálogo" }));
  resolver[1]([{ id: 2, titulo: "Nuevo" }]);
  await waitFor(() =>
    expect(screen.getByRole("list").textContent).toBe("Nuevo"),
  );
  await act(async () => resolver[0]([{ id: 1, titulo: "Antiguo" }]));
  await waitFor(() =>
    expect(screen.getByRole("status").textContent).toBe("1 recursos cargados."),
  );
  expect(screen.getByRole("list").textContent).toBe("Nuevo");
});
test("Error de cliente se informa y no se presenta como vacío", async () => {
  const user = userEvent.setup();
  render(
    <Catalogo
      cargar={async () => {
        throw Object.assign(new Error("HTTP 500"), { categoria: "http" });
      }}
    />,
  );
  await user.click(screen.getByRole("button", { name: "Cargar catálogo" }));
  await waitFor(() =>
    expect(screen.getByRole("status").textContent).toBe("http: HTTP 500"),
  );
  expect(screen.getByRole("list").textContent).toBe("");
  expect(
    screen.getByRole("button", { name: "Cancelar solicitud" }).disabled,
  ).toBe(true);
});

test("Acción React 19 informa resultado y limpia su campo no controlado", async () => {
  const { default: AccionNombre } =
    await import("../unidad10-formularios/ejemplo/AccionNombre.jsx");
  const user = userEvent.setup();
  render(<AccionNombre />);
  const entrada = screen.getByLabelText("Nombre para acción local");
  await user.type(entrada, " Ana ");
  await user.click(screen.getByRole("button", { name: "Procesar nombre" }));
  expect(
    screen.getByRole("button", { name: "Procesando nombre…" }).disabled,
  ).toBe(true);
  await waitFor(() =>
    expect(screen.getByRole("status").textContent).toBe(
      "Acción local completada: Ana",
    ),
  );
  expect(entrada.value).toBe("");
});
