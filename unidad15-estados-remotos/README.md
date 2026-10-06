# Unidad 15: Loading, error, empty y datos remotos

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/react/)

## Qué aprenderás
Modelar estados remotos explícitos y evitar interfaces ambiguas o spinners infinitos.

## 1. Estados

```text
idle
 ↓
loading
 ├── success con datos
 ├── empty
 └── error
```

Empty es una carga exitosa sin elementos, no un error.

## 2. Estado explícito

```jsx
const [status, setStatus] =
  useState("idle");
const [data, setData] =
  useState([]);
const [error, setError] =
  useState(null);
```

En casos más complejos, useReducer puede modelar transiciones; no es obligatorio todavía.

## 3. Loading

Comunica que una región está cargando.

No reemplaces toda la página si solo se actualiza una lista.

Puedes conservar datos anteriores durante revalidación si esa semántica mejora la experiencia.

## 4. Empty

Si la petición terminó correctamente pero no hay elementos, muestra un estado vacío con contexto y siguiente acción cuando exista.

## 5. Error

Muestra un mensaje comprensible, no stack trace.

El detalle técnico pertenece al diagnóstico.

## 6. Retry

Un botón Reintentar inicia una nueva carga controlada.

Evita reintentos automáticos infinitos.

## 7. Combinaciones imposibles

Con varios booleanos podrías terminar con loading=true, error presente y data antigua sin una semántica clara.

Un status discriminante ayuda a reducir estados imposibles.

## 8. Skeleton

Puede representar estructura durante carga.

No debe parecer contenido real ni provocar movimiento innecesario. Respeta reduced motion si se anima.

## 9. Accesibilidad

- loading comprensible;
- error identificado;
- retry con button;
- anuncios live moderados;
- no mover foco por cada refresco.

## 10. Práctica guiada

Renderiza idle, loading, datos, empty y error usando fixtures antes de conectar una API.

## 11. Errores frecuentes

- spinner único;
- empty como error;
- booleanos contradictorios;
- stack trace al usuario;
- retry infinito;
- aria-live excesivo.

## 12. Reto
Componente remoto que pueda mostrar todos sus estados sin hacer fetch real.

## 13. Autoevaluación

1. ¿Empty es error?
2. ¿Por qué status explícito?
3. ¿Retry infinito?
4. ¿Conservar datos durante refresh puede ser válido?
5. ¿Skeleton es contenido real?

## 14. Checklist

- [ ] Estados explícitos.
- [ ] Empty separado.
- [ ] Error útil.
- [ ] Retry.
- [ ] Accesibilidad.

Continúa con cancelación.

## Laboratorio desarrollado: Estados de un flujo remoto

### Modelo, contrato y decisiones

El catálogo empieza en idle. Cargar inicia loading y limpia datos anteriores para no presentar una lista vieja como vigente. Una colección válida decide success o empty; los fallos se representan en fase error con categoría específica. No hay una fase cancelada separada en este modelo: cancelada es una categoría de error. aria-busy expresa la actualización de la lista y el botón Cancelar solo está disponible durante carga.

Un componente correcto conserva su contrato cuando cambian entradas y condiciones. Antes de añadir una optimización o una abstracción, identifica qué dato tiene propietario, qué resultado se deriva y qué efecto toca un recurso externo. En este laboratorio puedes observar esas decisiones y comparar una modificación concreta con la referencia.

### Preparar y abrir

Sigue [ENTORNO.md](../docs/ENTORNO.md) desde la raíz del curso. Después abre http://127.0.0.1:5173/#/laboratorio/15. El [archivo App.jsx](ejemplo/App.jsx) es el componente completo de la unidad. GitHub muestra código fuente: para interactuar necesitas la copia local y el servidor Vite.

No hace falta un proyecto npm distinto por unidad. El [índice de laboratorios](../src/App.jsx) carga este componente y conserva la navegación. Los estilos y la entrada comunes están en src. Si lo copias a otro proyecto, conserva los imports que use y el contexto de router cuando corresponda; un fragmento aislado no incluye automáticamente esas dependencias.

### Resultado esperado

Los escenarios producen datos, vacío o una categoría visible de fallo.

### Implementación completa del componente

```jsx
import Catalogo from "../../features/catalogo/Catalogo.jsx";
export default function App() {
  return (
    <section>
      <h2>Estados remotos observables</h2>
      <Catalogo />
    </section>
  );
}
```

Lee primero los imports, después el estado/valores derivados y al final los handlers y JSX. Los cambios de estado solicitan otro render: no cambian el snapshot ya capturado por un handler. En componentes que importan una feature, abre el archivo importado para seguir su contrato; no confundas un wrapper visual con toda la lógica del flujo.

### Experimentar y comprobar

Completa una tabla para cada escenario y añade una nota sobre qué controles están habilitados. Distingue vacío de error y fase de categoría.

**Casos que debes registrar:** idle; loading; success; empty; http; json; esquema; timeout.

Escribe la predicción antes de modificar. Cambia una condición por vez y contrasta el resultado visible con sus datos de entrada. Console y Network aportan diagnóstico, pero una ausencia de excepciones no prueba por sí sola que la regla o la interacción sean correctas. Restaura las variantes defectuosas antes de continuar.

### Actividad y solución

Realiza [PRACTICA.md](PRACTICA.md) y consulta después [SOLUCIONES.md](SOLUCIONES.md). La solución explica qué decisión conserva el contrato; no exige copiar exactamente los mismos nombres. Cuando haya controles, recórrelos también con teclado y verifica que un error no elimine la posibilidad de corregirlo.

---

## Continuar el curso

- **Unidad anterior:** [Unidad 14: Datos remotos en React](../unidad14-datos-remotos/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 16: Cancelación, cleanup y carreras de red](../unidad16-cancelacion/README.md)
