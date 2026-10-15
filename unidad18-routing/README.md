# Unidad 18: Routing y URL como estado

**[Recorrido del código y resolución paso a paso](DESARROLLO.md)**

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/react/)

## Qué aprenderás
Relacionar URL con vistas, parámetros y navegación, preservando enlaces compartibles y semántica web.

## 1. SPA no elimina URL

Una aplicación React puede cambiar vistas sin recargar documento completo, pero la URL sigue siendo parte esencial de la Web.

Si una vista representa algo navegable/compartible, considera expresarlo en URL.

## 2. Router

Una librería de routing compatible con el proyecto suele resolver:

- rutas;
- parámetros;
- navegación;
- layouts;
- 404;
- búsqueda/query.

La API exacta cambia entre versiones. Comprende conceptos antes de memorizar funciones.

## 3. Enlace vs botón

Para navegar usa el componente/enlace que produzca semántica de link.

No uses button + navigate para todo si conceptualmente es un enlace.

Esto conserva:

- abrir en nueva pestaña;
- copiar URL;
- semántica;
- comportamiento esperado.

## 4. Parámetros

```text
/productos/42
```

42 identifica el recurso/ruta.

Valida el parámetro antes de usarlo y maneja recurso inexistente.

## 5. Query params

```text
/productos?q=react&page=2
```

Filtros, búsqueda, página u orden pueden pertenecer a URL cuando compartir/volver/recargar debe preservar ese estado.

No dupliques URL state en useState sin necesidad.

## 6. 404

Distingue:

- ruta no existente;
- ruta válida con recurso inexistente.

Ambas pueden mostrar “no encontrado”, pero provienen de capas distintas.

## 7. Navegación programática

Es apropiada después de acciones como:

- login exitoso;
- creación completada;
- flujo de wizard.

No reemplaza enlaces normales.

## 8. Accesibilidad

Al cambiar de ruta en una SPA, considera:

- título del documento;
- foco/anuncio del nuevo contenido cuando sea necesario;
- headings;
- estado activo de navegación.

El navegador no hace automáticamente todo lo que ocurriría en una navegación documental completa.

## 9. Práctica guiada

Catálogo:

- /productos;
- /productos/:id;
- ?q=;
- ruta 404.

Recarga cada URL directamente y verifica que siga funcionando en el hosting/router elegido.

## 10. Errores frecuentes

- toda navegación con button;
- filtro compartible solo en state;
- 404 de ruta = 404 de recurso;
- URL que falla al recargar en hosting;
- cambio de ruta sin título/foco apropiado.

## 11. Reto
Catálogo con detalle, filtros en URL y página no encontrada.

## 12. Autoevaluación

1. ¿SPA elimina URL?
2. ¿Cuándo query param?
3. ¿Link vs button?
4. ¿404 de ruta/recurso?
5. ¿Navegación programática cuándo?
6. ¿Qué revisar en accesibilidad?

## 13. Checklist

- [ ] URL significativa.
- [ ] Enlaces semánticos.
- [ ] Parámetros validados.
- [ ] Recarga funciona.
- [ ] Navegación accesible.

Continúa con Context.

## Laboratorio desarrollado: URL, parámetros y navegación

### Modelo, contrato y decisiones

La galería tiene un HashRouter común. Este laboratorio declara rutas anidadas sin crear otro router. La búsqueda procede de useSearchParams y puede sobrevivir a recarga; escribir usa replace para no producir una entrada de historial por cada tecla. El detalle valida el formato de id antes de localizar el recurso. Una ruta desconocida y un id desconocido son casos distintos aunque ambos se presenten como no encontrado. HashRouter mantiene rutas tras #, de modo que el hosting recibe la ruta del documento base.

### Preparar y abrir

Sigue [ENTORNO.md](../docs/ENTORNO.md) desde la raíz del curso. Después abre http://127.0.0.1:5173/#/laboratorio/18. El [archivo App.jsx](ejemplo/App.jsx) es el componente completo de la unidad. GitHub muestra código fuente: para interactuar necesitas la copia local y el servidor Vite.

No hace falta un proyecto npm distinto por unidad. El [índice de laboratorios](../src/App.jsx) carga este componente y conserva la navegación. Los estilos y la entrada comunes están en src. Si lo copias a otro proyecto, conserva los imports que use y el contexto de router cuando corresponda; un fragmento aislado no incluye automáticamente esas dependencias.

### Resultado esperado

La búsqueda queda en ?q= del hash y el detalle abre el recurso.

### Implementación completa del componente

```jsx
import { Link, Route, Routes, useParams, useSearchParams } from "react-router";
const datos = [
  { id: 1, titulo: "React" },
  { id: 2, titulo: "JavaScript" },
];
function Lista() {
  const [params, setParams] = useSearchParams();
  const q = params.get("q") ?? "";
  const visibles = datos.filter((r) =>
    r.titulo.toLowerCase().includes(q.toLowerCase()),
  );
  return (
    <>
      <label htmlFor="q">Buscar en URL</label>
      <input
        id="q"
        value={q}
        onChange={(e) =>
          setParams(e.target.value ? { q: e.target.value } : {}, {
            replace: true,
          })
        }
      />
      <ul>
        {visibles.map((r) => (
          <li key={r.id}>
            <Link to={`detalle/${r.id}`}>{r.titulo}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
function Detalle() {
  const { id } = useParams();
  const recurso = /^[1-9]\d*$/.test(id)
    ? datos.find((r) => r.id === Number(id))
    : null;
  return (
    <>
      <p>{recurso ? `Detalle: ${recurso.titulo}` : "Recurso no encontrado"}</p>
      <Link to="/laboratorio/18">Volver al catálogo</Link>
    </>
  );
}
export default function App() {
  return (
    <section>
      <h2>Rutas, detalle y búsqueda</h2>
      <Routes>
        <Route index element={<Lista />} />
        <Route path="detalle/:id" element={<Detalle />} />
        <Route path="*" element={<p>Ruta no encontrada</p>} />
      </Routes>
    </section>
  );
}
```

### Experimentar y comprobar

Recarga una URL filtrada y un detalle directamente. Prueba id 99, id abc y una ruta que no exista; usa enlaces y Atrás.

**Casos que debes registrar:** Filtro compartible; recarga; detalle 1; 99; abc; ruta ausente.

### Actividad y solución

Realiza [PRACTICA.md](PRACTICA.md) y consulta después [SOLUCIONES.md](SOLUCIONES.md). La solución explica qué decisión conserva el contrato; no exige copiar exactamente los mismos nombres. Cuando haya controles, recórrelos también con teclado y verifica que un error no elimine la posibilidad de corregirlo.

---

## Continuar el curso

- **Unidad anterior:** [Unidad 17: Custom hooks](../unidad17-custom-hooks/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 19: Context](../unidad19-context/README.md)

---

### ¿Necesitas apoyo con este tema?

Si te bloqueaste con la práctica, necesitas revisar tu entorno o adaptar lo aprendido a tu proyecto, podemos trabajarlo en una sesión personalizada.

[**Solicitar asesoría para este tema por WhatsApp**](https://wa.me/573103618296?text=Hola%2C%20Leli.%20Estoy%20estudiando%20Unidad%2018%20%E2%80%94%20Routing%20del%20curso%20React%20%28https%3A%2F%2Fgithub.com%2Flelyliliana%2FCurso-React%2Ftree%2Fmain%2Funidad18-routing%29%20y%20necesito%20una%20asesor%C3%ADa%20personalizada.%20Mi%20duda%20es%E2%80%A6)
