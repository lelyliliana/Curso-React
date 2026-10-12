# Unidad 14: Datos remotos en React

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/react/)

## Qué aprenderás
Consumir APIs sin mezclar transporte, estado y render, y comprender cuándo un effect es una solución razonable.

## 1. Cliente API

```js
export async function obtenerProductos(signal) {
  const response = await fetch("/api/productos", {
    signal
  });

  if (!response.ok) {
    throw new Error(
      `HTTP ${response.status}`
    );
  }

  return response.json();
}
```

Mantén HTTP fuera del JSX cuando la aplicación crece.

## 2. Carga ligada a estado

Si mostrar `/productos?q=react` requiere sincronizarse con el valor `q`, un efecto puede iniciar la carga.

En aplicaciones con router/data framework, el framework puede ofrecer loaders/cache que eviten escribir fetch manual en effects.

Aprende el modelo antes de abstraerlo.

## 3. Effect básico

```jsx
useEffect(() => {
  let ignore = false;

  async function cargar() {
    try {
      const datos = await obtenerProductos();
      if (!ignore) setProductos(datos);
    } catch (error) {
      if (!ignore) setError(error.message);
    }
  }

  cargar();

  return () => {
    ignore = true;
  };
}, []);
```

El fragmento supone obtenerProductos y los setters de estado definidos en el componente. Esto muestra el principio de ignorar resultados obsoletos; en la Unidad 16 usaremos AbortController.

## 4. No async directamente

El callback de useEffect debe devolver cleanup o undefined, no una Promise.

Por eso:

```jsx
useEffect(() => {
  async function cargar() {}
  cargar();
}, []);
```

en vez de `useEffect(async () => ...)`.

## 5. Waterfalls

Padre carga usuario; después hijo monta y carga pedidos; después nieto carga detalles.

Esto puede crear cascadas de red.

Routing/data libraries o cargas paralelas pueden mejorar el diseño.

No todo fetch pertenece a cada componente individual.

## 6. Cache

Un effect manual no proporciona automáticamente:

- cache;
- deduplicación;
- revalidación;
- prefetch;
- sincronización entre consumidores.

Librerías/frameworks de datos pueden aportar esas capacidades cuando la aplicación las necesita.

## 7. SSR

Fetch en effects ocurre solo en cliente después del render/commit, por lo que no participa en renderizado servidor inicial.

Esto importa en frameworks React con SSR.

## 8. Práctica guiada

Carga productos con cliente separado. Después dibuja qué ocurre si dos componentes necesitan el mismo recurso.

## 9. Errores frecuentes

- fetch dentro de JSX/render;
- useEffect(async ...);
- HTTP y markup mezclados;
- asumir cache;
- waterfalls ignoradas;
- creer que effect fetch corre en servidor.

## 10. Reto
Carga remota con cliente separado y explicación de cuándo migrarías a una solución de datos dedicada.

## 11. Autoevaluación

1. ¿fetch durante render?
2. ¿Por qué effect callback no async?
3. ¿Effect manual cachea?
4. ¿Qué es waterfall?
5. ¿Effect corre en SSR?
6. ¿Cliente API conoce JSX?

## 12. Checklist

- [ ] Cliente separado.
- [ ] Effect correcto.
- [ ] Comprendo limitaciones.
- [ ] Evito waterfalls obvias.

Continúa con estados remotos.

## Laboratorio desarrollado: Datos ligados a una dependencia

### Modelo, contrato y decisiones

escenario determina qué datos representa la vista. El efecto inicia una carga asociada a ese valor y su cleanup marca vigente=false y aborta. El cliente comprueba status HTTP, JSON y contrato de datos. La bandera protege el resultado local de ese setup aunque el transporte tarde en terminar; la cancelación reduce trabajo cuando es atendida. No declares async al callback directo del efecto: debe devolver una limpieza o nada, no una Promise.

Un componente correcto conserva su contrato cuando cambian entradas y condiciones. Antes de añadir una optimización o una abstracción, identifica qué dato tiene propietario, qué resultado se deriva y qué efecto toca un recurso externo. En este laboratorio puedes observar esas decisiones y comparar una modificación concreta con la referencia.

### Preparar y abrir

Sigue [ENTORNO.md](../docs/ENTORNO.md) desde la raíz del curso. Después abre http://127.0.0.1:5173/#/laboratorio/14. El [archivo App.jsx](ejemplo/App.jsx) es el componente completo de la unidad. GitHub muestra código fuente: para interactuar necesitas la copia local y el servidor Vite.

No hace falta un proyecto npm distinto por unidad. El [índice de laboratorios](../src/App.jsx) carga este componente y conserva la navegación. Los estilos y la entrada comunes están en src. Si lo copias a otro proyecto, conserva los imports que use y el contexto de router cuando corresponda; un fragmento aislado no incluye automáticamente esas dependencias.

### Resultado esperado

normal produce success; vacio produce empty; un fallo informa su categoría.

### Implementación completa del componente

```jsx
import { useEffect, useState } from "react";
import { cargarCatalogo } from "../../features/catalogo/cliente.js";
export default function App() {
  const [escenario, setEscenario] = useState("normal"),
    [estado, setEstado] = useState({ fase: "loading", datos: [], error: "" });
  useEffect(() => {
    const controller = new AbortController();
    let vigente = true;
    setEstado({ fase: "loading", datos: [], error: "" });
    cargarCatalogo({ escenario, signal: controller.signal })
      .then((datos) => {
        if (vigente)
          setEstado({
            fase: datos.length ? "success" : "empty",
            datos,
            error: "",
          });
      })
      .catch((error) => {
        if (vigente)
          setEstado({
            fase: "error",
            datos: [],
            error: `${error.categoria}: ${error.message}`,
          });
      });
    return () => {
      vigente = false;
      controller.abort();
    };
  }, [escenario]);
  return (
    <section>
      <h2>Datos según una dependencia</h2>
      <label htmlFor="escenario">Escenario del efecto</label>
      <select
        id="escenario"
        value={escenario}
        onChange={(e) => setEscenario(e.target.value)}
      >
        {["normal", "vacio", "http500", "jsoninvalido", "lento"].map((v) => (
          <option key={v}>{v}</option>
        ))}
      </select>
      <p role="status">{estado.fase}</p>
      {estado.error && <p role="alert">{estado.error}</p>}
      <ul>
        {estado.datos.map((r) => (
          <li key={r.id}>{r.titulo}</li>
        ))}
      </ul>
    </section>
  );
}
```

Lee primero los imports, después el estado/valores derivados y al final los handlers y JSX. Los cambios de estado solicitan otro render: no cambian el snapshot ya capturado por un handler. En componentes que importan una feature, abre el archivo importado para seguir su contrato; no confundas un wrapper visual con toda la lógica del flujo.

### Experimentar y comprobar

Cambia lento a normal antes de recibir respuesta. Después ensaya HTTP 500 y JSON inválido y distingue sus mensajes.

**Casos que debes registrar:** normal; vacio; 500; JSON inválido; cambio rápido lento a normal.

Escribe la predicción antes de modificar. Cambia una condición por vez y contrasta el resultado visible con sus datos de entrada. Console y Network aportan diagnóstico, pero una ausencia de excepciones no prueba por sí sola que la regla o la interacción sean correctas. Restaura las variantes defectuosas antes de continuar.

### Actividad y solución

Realiza [PRACTICA.md](PRACTICA.md) y consulta después [SOLUCIONES.md](SOLUCIONES.md). La solución explica qué decisión conserva el contrato; no exige copiar exactamente los mismos nombres. Cuando haya controles, recórrelos también con teclado y verifica que un error no elimine la posibilidad de corregirlo.

---

## Continuar el curso

- **Unidad anterior:** [Unidad 13: useEffect, dependencias y cleanup](../unidad13-useeffect/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 15: Loading, error, empty y datos remotos](../unidad15-estados-remotos/README.md)

---

### ¿Necesitas apoyo con este tema?

Si te bloqueaste con la práctica, necesitas revisar tu entorno o adaptar lo aprendido a tu proyecto, podemos trabajarlo en una sesión personalizada.

[**Solicitar asesoría para este tema por WhatsApp**](https://wa.me/573103618296?text=Hola%2C%20Leli.%20Estoy%20estudiando%20Unidad%2014%20%E2%80%94%20Datos%20remotos%20del%20curso%20React%20%28https%3A%2F%2Fgithub.com%2Flelyliliana%2FCurso-React%2Ftree%2Fmain%2Funidad14-datos-remotos%29%20y%20necesito%20una%20asesor%C3%ADa%20personalizada.%20Mi%20duda%20es%E2%80%A6)
