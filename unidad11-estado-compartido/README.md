# Unidad 11: Estado derivado y lifting state up

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/react/)

## Qué aprenderás
Mantener una sola fuente de verdad, derivar valores y elevar estado al ancestro común cuando componentes necesitan coordinarse.

## 1. Estado duplicado

Evita:

```jsx
const [productos, setProductos] = useState([]);
const [filtrados, setFiltrados] = useState([]);
```

si filtrados siempre puede calcularse desde productos + filtro.

## 2. Derivar durante render

```jsx
const visibles = productos.filter(
  p => p.nombre.includes(filtro)
);
```

No necesitas un efecto para mantenerlo sincronizado.

## 3. Por qué duplicar falla

Si actualizas productos pero olvidas filtrados, la UI queda inconsistente.

Cada copia añade sincronización.

## 4. Lifting state up

Dos hermanos necesitan la misma selección:

```text
       Padre
       estado
      /     \
 Selector  Detalle
```

El padre posee estado y pasa valor/callbacks.

## 5. No eleves demasiado

Estado que solo necesita un input no tiene por qué vivir en App.

Colócalo en el ancestro común **más cercano** que necesita coordinarlo.

## 6. Estado vs prop

Si un hijo recibe `color` y crea:

```jsx
const [localColor, setLocalColor] =
  useState(color);
```

esa copia no se actualiza automáticamente cuando prop cambia.

Antes de copiar prop a estado pregunta por qué necesitas dos fuentes.

## 7. Reset intencional

Si un editor debe reiniciarse cuando cambia la entidad, puedes:

- diseñar estado controlado;
- cambiar key deliberadamente;
- manejar transición explícita.

No sincronices automáticamente cada prop con useEffect sin analizar.

## 8. Totales

```jsx
const total = carrito.reduce((suma, item) => suma + item.precio * item.cantidad, 0);
```

es derivado.

Si el cálculo fuera realmente costoso, primero mide; memoización viene después.

## 9. Práctica guiada

Buscador:

- filtro en padre;
- campo hijo;
- lista hija;
- resultados derivados.

Después mueve estado hacia abajo/arriba y observa qué componentes realmente lo necesitan.

## 10. Errores frecuentes

- estado para datos calculables;
- useEffect para sincronizar derivados;
- copiar prop a state;
- todo en App;
- memoizar antes de medir.

## 11. Reto
Filtro + lista + contador sin estado duplicado ni efecto de sincronización.

## 12. Autoevaluación

1. ¿Qué es estado derivado?
2. ¿Necesita useEffect?
3. ¿Dónde elevar estado?
4. ¿Copiar prop a state es automático?
5. ¿Todo estado en App?
6. ¿Total necesita state?

## 13. Checklist

- [ ] Una fuente de verdad.
- [ ] Derivo durante render.
- [ ] Elevo solo lo compartido.
- [ ] Evito sincronización artificial.

Continúa con efectos.

## Laboratorio desarrollado: Levantar estado y derivar total

### Modelo, contrato y decisiones

El padre mantiene cantidad y ambos Campos reciben el mismo valor y acción. El total se calcula a partir de cantidad; no se guarda como otra fuente que deba sincronizarse. Para el input range, event.target.value es texto, por lo que se convierte antes de actualizar el número. El hijo comunica una intención mediante onCantidad y no modifica props. Si cada hijo mantuviera otra cantidad, habría que resolver explícitamente cuál valor gobierna los dos controles.

Un componente correcto conserva su contrato cuando cambian entradas y condiciones. Antes de añadir una optimización o una abstracción, identifica qué dato tiene propietario, qué resultado se deriva y qué efecto toca un recurso externo. En este laboratorio puedes observar esas decisiones y comparar una modificación concreta con la referencia.

### Preparar y abrir

Sigue [ENTORNO.md](../docs/ENTORNO.md) desde la raíz del curso. Después abre http://127.0.0.1:5173/#/laboratorio/11. El [archivo App.jsx](ejemplo/App.jsx) es el componente completo de la unidad. GitHub muestra código fuente: para interactuar necesitas la copia local y el servidor Vite.

No hace falta un proyecto npm distinto por unidad. El [índice de laboratorios](../src/App.jsx) carga este componente y conserva la navegación. Los estilos y la entrada comunes están en src. Si lo copias a otro proyecto, conserva los imports que use y el contexto de router cuando corresponda; un fragmento aislado no incluye automáticamente esas dependencias.

### Resultado esperado

Ambos controles empiezan en 2 y el total es 10.

### Implementación completa del componente

```jsx
import { useState } from "react";
function Campo({ id, titulo, cantidad, onCantidad }) {
  return (
    <div>
      <label htmlFor={id}>{titulo}</label>
      <input
        id={id}
        type="range"
        min="0"
        max="10"
        value={cantidad}
        onChange={(e) => onCantidad(Number(e.target.value))}
      />
      <p>
        {titulo}: {cantidad}
      </p>
    </div>
  );
}
export default function App() {
  const [cantidad, setCantidad] = useState(2);
  const total = cantidad * 5;
  return (
    <section>
      <h2>Un propietario del estado</h2>
      <Campo
        id="a"
        titulo="Control A"
        cantidad={cantidad}
        onCantidad={setCantidad}
      />
      <Campo
        id="b"
        titulo="Control B"
        cantidad={cantidad}
        onCantidad={setCantidad}
      />
      <p role="status">Total: {total}</p>
    </section>
  );
}
```

Lee primero los imports, después el estado/valores derivados y al final los handlers y JSX. Los cambios de estado solicitan otro render: no cambian el snapshot ya capturado por un handler. En componentes que importan una feature, abre el archivo importado para seguir su contrato; no confundas un wrapper visual con toda la lógica del flujo.

### Experimentar y comprobar

Cambia Control A a 5 con teclado y comprueba B y total. Añade un tercer visor de cantidad sin introducir otro useState.

**Casos que debes registrar:** A y B; mínimo 0; máximo 10; tercer visor; total coherente.

Escribe la predicción antes de modificar. Cambia una condición por vez y contrasta el resultado visible con sus datos de entrada. Console y Network aportan diagnóstico, pero una ausencia de excepciones no prueba por sí sola que la regla o la interacción sean correctas. Restaura las variantes defectuosas antes de continuar.

### Actividad y solución

Realiza [PRACTICA.md](PRACTICA.md) y consulta después [SOLUCIONES.md](SOLUCIONES.md). La solución explica qué decisión conserva el contrato; no exige copiar exactamente los mismos nombres. Cuando haya controles, recórrelos también con teclado y verifica que un error no elimine la posibilidad de corregirlo.

---

## Continuar el curso

- **Unidad anterior:** [Unidad 10: Formularios en React](../unidad10-formularios/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 12: Render, eventos y efectos](../unidad12-efectos/README.md)
