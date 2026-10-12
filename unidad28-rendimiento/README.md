# Unidad 28: Re-renderizados y rendimiento

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/react/)

## Qué aprenderás
Optimizar desde evidencia, colocar estado cerca de quien lo usa y distinguir render costoso de render frecuente.

## 1. Re-render no es DOM completo

React puede volver a ejecutar componentes para calcular UI sin necesariamente reemplazar todo el DOM.

Por eso “renderizó 20 veces” no demuestra lentitud.

## 2. Mide experiencia

Busca:

- input con retraso;
- lista lenta;
- navegación;
- commit costoso.

Después usa Profiler.

## 3. Estado cerca

Si un input local vive en App, cada tecla puede hacer renderizar un árbol grande.

Mover estado al componente que lo necesita puede reducir trabajo y mejorar arquitectura sin memoización.

## 4. Composición

A veces pasar children permite que una parte costosa no dependa del estado del contenedor interactivo.

Diseño de componentes puede ser una optimización.

## 5. Cálculo costoso

Filtrar 20 elementos no necesita useMemo.

Procesar una colección grande/cálculo pesado sí puede merecer medición.

## 6. Listas grandes

Opciones:

- paginar;
- virtualizar;
- reducir DOM;
- server-side filtering.

Memoizar cada fila no arregla necesariamente 100 000 nodos.

## 7. Transiciones

React moderno ofrece mecanismos para marcar actualizaciones no urgentes en ciertos escenarios.

Úsalos cuando la interacción realmente se beneficia y según versión de React; no como sustituto de reducir trabajo.

## 8. Red

Una UI lenta puede estar esperando API.

Profiler React no arregla una respuesta de red de cinco segundos.

## 9. Ciclo

```text
medir
→ hipótesis
→ cambio
→ repetir interacción
→ comparar
```

## 10. Práctica guiada

Lista con búsqueda:

1. baseline;
2. perfil;
3. mueve estado;
4. mide;
5. solo después considera memoización.

## 11. Errores frecuentes

- re-render = DOM;
- memo por defecto;
- estado global innecesario;
- lista enorme sin virtualizar;
- ignorar red;
- optimizar sin baseline.

## 12. Reto
Informe de una interacción lenta con perfil antes/después.

## 13. Autoevaluación

1. ¿Re-render reemplaza todo DOM?
2. ¿Dónde poner estado?
3. ¿20 elementos necesitan memo?
4. ¿Lista enorme se arregla con memo?
5. ¿Qué medir primero?

## 14. Checklist

- [ ] Mido interacción.
- [ ] Estado cercano.
- [ ] Reduzco trabajo.
- [ ] Comparo evidencia.

Continúa con memoización.

## Laboratorio desarrollado: Medir render y commit

### Modelo, contrato y decisiones

Profiler informa datos de renders comprometidos en una compilación de desarrollo apropiada. El handler onRender registra fuera del render; no actualiza el mismo estado medido y evita un ciclo de instrumentación. El contador del padre cambia aunque la lista fija siga igual; hay que distinguir invocar una función de componente, reconciliar y modificar nodos. StrictMode añade comprobaciones en desarrollo y una build estándar de producción no proporciona el mismo perfil de instrumentación.

Un componente correcto conserva su contrato cuando cambian entradas y condiciones. Antes de añadir una optimización o una abstracción, identifica qué dato tiene propietario, qué resultado se deriva y qué efecto toca un recurso externo. En este laboratorio puedes observar esas decisiones y comparar una modificación concreta con la referencia.

### Preparar y abrir

Sigue [ENTORNO.md](../docs/ENTORNO.md) desde la raíz del curso. Después abre http://127.0.0.1:5173/#/laboratorio/28. El [archivo App.jsx](ejemplo/App.jsx) es el componente completo de la unidad. GitHub muestra código fuente: para interactuar necesitas la copia local y el servidor Vite.

No hace falta un proyecto npm distinto por unidad. El [índice de laboratorios](../src/App.jsx) carga este componente y conserva la navegación. Los estilos y la entrada comunes están en src. Si lo copias a otro proyecto, conserva los imports que use y el contexto de router cuando corresponda; un fragmento aislado no incluye automáticamente esas dependencias.

### Resultado esperado

Actualizar padre cambia cantidad y permite observar logs de perfil en desarrollo.

### Implementación completa del componente

```jsx
import { Profiler, useState } from "react";
function Lista() {
  return (
    <ul>
      {Array.from({ length: 100 }, (_, i) => (
        <li key={i}>Recurso fijo {i + 1}</li>
      ))}
    </ul>
  );
}
export default function App() {
  const [cantidad, setCantidad] = useState(0);
  function medir(id, fase, duracion) {
    console.log("Perfil de laboratorio", { id, fase, duracion });
  }
  return (
    <section>
      <h2>Medir renders con Profiler</h2>
      <button type="button" onClick={() => setCantidad((n) => n + 1)}>
        Actualizar padre
      </button>
      <p>Cantidad: {cantidad}</p>
      <Profiler id="lista" onRender={medir}>
        <Lista />
      </Profiler>
    </section>
  );
}
```

Lee primero los imports, después el estado/valores derivados y al final los handlers y JSX. Los cambios de estado solicitan otro render: no cambian el snapshot ya capturado por un handler. En componentes que importan una feature, abre el archivo importado para seguir su contrato; no confundas un wrapper visual con toda la lógica del flujo.

### Experimentar y comprobar

Registra diez interacciones comparables. Añade una lista más grande en una copia y analiza duración; distingue evidencia local de una mejora universal.

**Casos que debes registrar:** Baseline; diez muestras; lista fija; lista mayor; render vs DOM.

Escribe la predicción antes de modificar. Cambia una condición por vez y contrasta el resultado visible con sus datos de entrada. Console y Network aportan diagnóstico, pero una ausencia de excepciones no prueba por sí sola que la regla o la interacción sean correctas. Restaura las variantes defectuosas antes de continuar.

### Actividad y solución

Realiza [PRACTICA.md](PRACTICA.md) y consulta después [SOLUCIONES.md](SOLUCIONES.md). La solución explica qué decisión conserva el contrato; no exige copiar exactamente los mismos nombres. Cuando haya controles, recórrelos también con teclado y verifica que un error no elimine la posibilidad de corregirlo.

---

## Continuar el curso

- **Unidad anterior:** [Unidad 27: React DevTools y depuración](../unidad27-debug/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 29: memo, useMemo y useCallback](../unidad29-memoizacion/README.md)

---

### ¿Necesitas apoyo con este tema?

Si te bloqueaste con la práctica, necesitas revisar tu entorno o adaptar lo aprendido a tu proyecto, podemos trabajarlo en una sesión personalizada.

[**Solicitar asesoría para este tema por WhatsApp**](https://wa.me/573103618296?text=Hola%2C%20Leli.%20Estoy%20estudiando%20Unidad%2028%20%E2%80%94%20Re-renderizados%20y%20rendimiento%20del%20curso%20React%20%28https%3A%2F%2Fgithub.com%2Flelyliliana%2FCurso-React%2Ftree%2Fmain%2Funidad28-rendimiento%29%20y%20necesito%20una%20asesor%C3%ADa%20personalizada.%20Mi%20duda%20es%E2%80%A6)
