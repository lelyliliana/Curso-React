# Unidad 09: Listas, keys e identidad

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/react/)

## Qué aprenderás
Renderizar colecciones y usar keys para que React conserve correctamente identidad y estado entre renders.

## 1. map

```jsx
<ul>
  {items.map(item => (
    <li key={item.id}>
      {item.nombre}
    </li>
  ))}
</ul>
```

## 2. Qué es key

Key ayuda a React a identificar un elemento entre hermanos a través de renders.

No es un prop normal disponible automáticamente dentro del componente.

Si necesitas id, pásalo explícitamente.

## 3. ID estable

Buena key:

```jsx
<li key={item.id}>{item.nombre}</li>
```

Debe ser estable para la identidad del dato.

## 4. Índice

```jsx
<li key={index}>{item.nombre}</li>
```

puede funcionar en una lista verdaderamente estática que nunca reordena/inserta/elimina y cuyos items no mantienen identidad relevante.

En listas editables puede asociar estado/DOM al elemento equivocado.

## 5. Math.random

```jsx
<li key={Math.random()}>{item.nombre}</li>
```

crea una key nueva en cada render.

React tratará items como nuevos, provocando desmontaje/montaje y pérdida de estado.

## 6. Key y reset intencional

Puedes cambiar key deliberadamente para pedir a React una identidad nueva y reiniciar estado de un subárbol.

Úsalo cuando ese sea el significado, no como parche.

## 7. Filtrar/ordenar

Deriva la lista:

```jsx
const visibles = items
  .filter(item => item.activo)
  .toSorted((a, b) => a.nombre.localeCompare(b.nombre));
```

No necesitas guardar otra copia en estado solo porque se renderiza filtrada.

## 8. Estado del item

Si cada fila tiene input/estado, keys incorrectas se vuelven visibles al reordenar.

Este es un excelente experimento para comprender identidad.

## 9. Práctica guiada

Lista editable:

1. tres items con ID;
2. input por fila;
3. reordena;
4. prueba con key=id;
5. prueba con key=index;
6. compara.

## 10. Errores frecuentes

- índice siempre;
- random;
- esperar key dentro de props;
- guardar lista filtrada duplicada;
- mutar array antes de render.

## 11. Reto
Lista editable/ordenable con IDs estables y estado correcto tras reordenar.

## 12. Autoevaluación

1. ¿Para qué key?
2. ¿Key llega como prop?
3. ¿Cuándo índice puede ser aceptable?
4. ¿Por qué random es malo?
5. ¿Key puede reiniciar estado?
6. ¿Lista filtrada necesita estado?

## 13. Checklist

- [ ] IDs estables.
- [ ] Keys correctas.
- [ ] Estado preservado.
- [ ] Datos derivados.

Continúa con formularios.

## Laboratorio desarrollado: Identidad al reordenar

### Modelo, contrato y decisiones

Cada persona tiene un id estable. Los inputs no controlados permiten observar cómo React conserva el valor asociado a un nodo con esa identidad cuando cambia su posición. reverse se aplica a una copia del array para no mutar el estado previo. Una key solo debe ser única entre sus hermanos; no se recibe automáticamente como prop. Este experimento compara identidad y orden sin convertir el DOM en la fuente de datos de una aplicación de tareas.

Un componente correcto conserva su contrato cuando cambian entradas y condiciones. Antes de añadir una optimización o una abstracción, identifica qué dato tiene propietario, qué resultado se deriva y qué efecto toca un recurso externo. En este laboratorio puedes observar esas decisiones y comparar una modificación concreta con la referencia.

### Preparar y abrir

Sigue [ENTORNO.md](../docs/ENTORNO.md) desde la raíz del curso. Después abre http://127.0.0.1:5173/#/laboratorio/09. El [archivo App.jsx](ejemplo/App.jsx) es el componente completo de la unidad. GitHub muestra código fuente: para interactuar necesitas la copia local y el servidor Vite.

No hace falta un proyecto npm distinto por unidad. El [índice de laboratorios](../src/App.jsx) carga este componente y conserva la navegación. Los estilos y la entrada comunes están en src. Si lo copias a otro proyecto, conserva los imports que use y el contexto de router cuando corresponda; un fragmento aislado no incluye automáticamente esas dependencias.

### Resultado esperado

El alias editado de Ana sigue junto a Ana después de invertir el orden.

### Implementación completa del componente

```jsx
import { useState } from "react";
const inicial = [
  { id: 1, nombre: "Ana" },
  { id: 2, nombre: "Luis" },
];
export default function App() {
  const [personas, setPersonas] = useState(inicial);
  return (
    <section>
      <h2>Keys e identidad de filas</h2>
      <button
        type="button"
        onClick={() => setPersonas((p) => [...p].reverse())}
      >
        Invertir orden
      </button>
      <ul>
        {personas.map((p) => (
          <li key={p.id}>
            <label htmlFor={`alias-${p.id}`}>Alias de {p.nombre}</label>
            <input id={`alias-${p.id}`} defaultValue={p.nombre} />
          </li>
        ))}
      </ul>
    </section>
  );
}
```

Lee primero los imports, después el estado/valores derivados y al final los handlers y JSX. Los cambios de estado solicitan otro render: no cambian el snapshot ya capturado por un handler. En componentes que importan una feature, abre el archivo importado para seguir su contrato; no confundas un wrapper visual con toda la lógica del flujo.

### Experimentar y comprobar

Edita ambos alias y reordena dos veces. En una copia usa el índice como key y observa cómo se asocian los valores; restaura los id al terminar.

**Casos que debes registrar:** Alias distintos; una inversión; dos inversiones; id vs índice.

Escribe la predicción antes de modificar. Cambia una condición por vez y contrasta el resultado visible con sus datos de entrada. Console y Network aportan diagnóstico, pero una ausencia de excepciones no prueba por sí sola que la regla o la interacción sean correctas. Restaura las variantes defectuosas antes de continuar.

### Actividad y solución

Realiza [PRACTICA.md](PRACTICA.md) y consulta después [SOLUCIONES.md](SOLUCIONES.md). La solución explica qué decisión conserva el contrato; no exige copiar exactamente los mismos nombres. Cuando haya controles, recórrelos también con teclado y verifica que un error no elimine la posibilidad de corregirlo.

---

## Continuar el curso

- **Unidad anterior:** [Unidad 08: Renderizado condicional](../unidad08-condicional/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 10: Formularios en React](../unidad10-formularios/README.md)
