export function apiLaboratorio(req, res, next) {
  const url = new URL(req.url, "http://localhost");
  if (url.pathname !== "/api/catalogo") {
    next();
    return;
  }
  const responder = (status, body) => {
    res.writeHead(status, {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    });
    res.end(body);
  };
  if (req.method !== "GET") {
    responder(405, '{"error":"Método no admitido"}');
    return;
  }
  const escenario = url.searchParams.get("escenario") ?? "normal";
  if (escenario === "http404" || escenario === "http500") {
    responder(
      escenario === "http404" ? 404 : 500,
      '{"error":"Fallo de laboratorio"}',
    );
    return;
  }
  if (escenario === "jsoninvalido") {
    responder(200, "{incompleto");
    return;
  }
  if (escenario === "esquemainvalido") {
    responder(200, '{"datos":"no es una colección"}');
    return;
  }
  if (escenario === "vacio") {
    responder(200, "[]");
    return;
  }
  if (!["normal", "lento", "marcado"].includes(escenario)) {
    responder(400, '{"error":"Escenario desconocido"}');
    return;
  }
  const datos = JSON.stringify([
    {
      id: 1,
      titulo:
        escenario === "marcado"
          ? "<img src=x onerror=alert(1)>"
          : "Guía de React",
    },
    { id: 2, titulo: "Práctica de componentes" },
  ]);
  if (escenario === "lento") {
    const id = setTimeout(() => {
      if (!res.destroyed) responder(200, datos);
    }, 800);
    res.on("close", () => clearTimeout(id));
  } else responder(200, datos);
}
export function pluginLaboratorio() {
  return {
    name: "api-del-curso",
    configureServer(s) {
      s.middlewares.use(apiLaboratorio);
    },
    configurePreviewServer(s) {
      s.middlewares.use(apiLaboratorio);
    },
  };
}
