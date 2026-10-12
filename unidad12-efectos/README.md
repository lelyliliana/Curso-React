# Unidad 12: Render, eventos y efectos

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/react/)

## Qué aprenderás
Decidir si una operación pertenece al render, a un handler o a un efecto de sincronización.

## 1. Tres lugares

**Render:** calcular UI desde props/estado.  
**Evento:** responder a una interacción concreta.  
**Efecto:** sincronizar con un sistema externo porque el componente está renderizado con cierto estado.

## 2. Render

```jsx
const nombreCompleto =
  `${nombre} ${apellido}`;

const visibles = items.filter(item => item.activo);
```

No necesitas useEffect para cálculos derivados.

## 3. Evento

Usuario pulsa comprar:

```jsx
function comprar() {
  enviarPedido();
}
```

La causa es la interacción.

No necesitas guardar `debeComprar=true` y un efecto que observe ese estado para enviar.

## 4. Efecto

Ejemplos:

- suscribirse a WebSocket;
- sincronizar document.title;
- conectar un widget externo;
- timer que existe mientras el componente está montado;
- petición ligada a una consulta/URL que representa el estado actual.

## 5. No todo externo necesita effect

Guardar al pulsar “Guardar” es un evento.

Un efecto se usa cuando la causa es que **la UI está presente/configurada con ciertos valores**, no una acción puntual que ya conoces.

## 6. Efectos como escape hatch

React puede calcular mucho declarativamente.

Los efectos conectan React con sistemas que React no controla.

Menos efectos suele significar menos sincronización y menos estados imposibles.

## 7. Ciclo conceptual

```text
render
→ commit
→ effect
→ posible cleanup
→ nuevo effect cuando cambian dependencias
```

Los detalles de scheduling pueden variar; no bases lógica en tiempos accidentales.

## 8. StrictMode

En desarrollo puede ejecutar setup/cleanup adicional para comprobar que el efecto es reversible.

Si eso rompe tu código, probablemente el efecto no limpia/sincroniza correctamente.

## 9. Práctica guiada

Clasifica:

- filtrar lista;
- calcular total;
- enviar formulario;
- cambiar title por página;
- suscripción;
- guardar por click;
- timer;
- focus tras abrir dialog.

Justifica render/event/effect.

## 10. Errores frecuentes

- effect para derivar;
- effect para cada click;
- effect como “código después del render”;
- ignorar cleanup;
- desactivar StrictMode para esconder problemas.

## 11. Reto
Refactoriza un componente con tres efectos innecesarios y deja solo sincronizaciones externas reales.

## 12. Autoevaluación

1. ¿Filtro necesita effect?
2. ¿Compra por click?
3. ¿Qué es sistema externo?
4. ¿Cuándo ocurre effect conceptualmente?
5. ¿StrictMode por qué ayuda?

## 13. Checklist

- [ ] Render para derivar.
- [ ] Evento para interacción.
- [ ] Effect para sincronización.
- [ ] Cleanup reversible.

Continúa con useEffect.

## Laboratorio desarrollado: Render, evento y efecto

### Modelo, contrato y decisiones

El filtro de recursos se calcula durante render y no escribe en un sistema externo. El evento cambia búsqueda y deja que React derive la vista. El efecto sincroniza document.title, un recurso del navegador que está fuera de los nodos descritos por JSX, y restaura el título capturado en cleanup. La causa de esta sincronización es la cantidad actual de resultados; el efecto depende de esa cantidad y no de un array nuevo construido en cada render.

Un componente correcto conserva su contrato cuando cambian entradas y condiciones. Antes de añadir una optimización o una abstracción, identifica qué dato tiene propietario, qué resultado se deriva y qué efecto toca un recurso externo. En este laboratorio puedes observar esas decisiones y comparar una modificación concreta con la referencia.

### Preparar y abrir

Sigue [ENTORNO.md](../docs/ENTORNO.md) desde la raíz del curso. Después abre http://127.0.0.1:5173/#/laboratorio/12. El [archivo App.jsx](ejemplo/App.jsx) es el componente completo de la unidad. GitHub muestra código fuente: para interactuar necesitas la copia local y el servidor Vite.

No hace falta un proyecto npm distinto por unidad. El [índice de laboratorios](../src/App.jsx) carga este componente y conserva la navegación. Los estilos y la entrada comunes están en src. Si lo copias a otro proyecto, conserva los imports que use y el contexto de router cuando corresponda; un fragmento aislado no incluye automáticamente esas dependencias.

### Resultado esperado

La búsqueda React deja un recurso y el título indica 1 recursos.

### Implementación completa del componente

```jsx
import { useEffect, useState } from "react";
const recursos = ["React", "JavaScript", "HTML"];
export default function App() {
  const [busqueda, setBusqueda] = useState("");
  const visibles = recursos.filter((r) =>
    r.toLowerCase().includes(busqueda.toLowerCase()),
  );
  useEffect(() => {
    const anterior = document.title;
    document.title = `${visibles.length} recursos (React)`;
    return () => {
      document.title = anterior;
    };
  }, [visibles.length]);
  return (
    <section>
      <h2>Cálculo durante render, sincronización en efecto</h2>
      <label htmlFor="q">Buscar recurso</label>
      <input
        id="q"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
      <p>{visibles.length} resultados</p>
      <ul>
        {visibles.map((r) => (
          <li key={r}>{r}</li>
        ))}
      </ul>
    </section>
  );
}
```

Lee primero los imports, después el estado/valores derivados y al final los handlers y JSX. Los cambios de estado solicitan otro render: no cambian el snapshot ya capturado por un handler. En componentes que importan una feature, abre el archivo importado para seguir su contrato; no confundas un wrapper visual con toda la lógica del flujo.

### Experimentar y comprobar

Añade un contador de caracteres derivado. Observa qué pasa cuando cambias la búsqueda sin cambiar la cantidad de resultados, y al salir de la unidad.

**Casos que debes registrar:** Tres recursos; uno; ninguno; cantidad sin cambiar; salir y cleanup.

Escribe la predicción antes de modificar. Cambia una condición por vez y contrasta el resultado visible con sus datos de entrada. Console y Network aportan diagnóstico, pero una ausencia de excepciones no prueba por sí sola que la regla o la interacción sean correctas. Restaura las variantes defectuosas antes de continuar.

### Actividad y solución

Realiza [PRACTICA.md](PRACTICA.md) y consulta después [SOLUCIONES.md](SOLUCIONES.md). La solución explica qué decisión conserva el contrato; no exige copiar exactamente los mismos nombres. Cuando haya controles, recórrelos también con teclado y verifica que un error no elimine la posibilidad de corregirlo.

---

## Continuar el curso

- **Unidad anterior:** [Unidad 11: Estado derivado y lifting state up](../unidad11-estado-compartido/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 13: useEffect, dependencias y cleanup](../unidad13-useeffect/README.md)

---

### ¿Necesitas apoyo con este tema?

Si te bloqueaste con la práctica, necesitas revisar tu entorno o adaptar lo aprendido a tu proyecto, podemos trabajarlo en una sesión personalizada.

[**Solicitar asesoría para este tema por WhatsApp**](https://wa.me/573103618296?text=Hola%2C%20Leli.%20Estoy%20estudiando%20Unidad%2012%20%E2%80%94%20Renderizado%20y%20efectos%20del%20curso%20React%20%28https%3A%2F%2Fgithub.com%2Flelyliliana%2FCurso-React%2Ftree%2Fmain%2Funidad12-efectos%29%20y%20necesito%20una%20asesor%C3%ADa%20personalizada.%20Mi%20duda%20es%E2%80%A6)
