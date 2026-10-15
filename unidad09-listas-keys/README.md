# Unidad 09: Listas, keys e identidad

**[Recorrido del código y resolución paso a paso](DESARROLLO.md)**

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

### Experimentar y comprobar

Edita ambos alias y reordena dos veces. En una copia usa el índice como key y observa cómo se asocian los valores; restaura los id al terminar.

**Casos que debes registrar:** Alias distintos; una inversión; dos inversiones; id vs índice.

### Actividad y solución

Realiza [PRACTICA.md](PRACTICA.md) y consulta después [SOLUCIONES.md](SOLUCIONES.md). La solución explica qué decisión conserva el contrato; no exige copiar exactamente los mismos nombres. Cuando haya controles, recórrelos también con teclado y verifica que un error no elimine la posibilidad de corregirlo.

---

## Continuar el curso

- **Unidad anterior:** [Unidad 08: Renderizado condicional](../unidad08-condicional/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 10: Formularios en React](../unidad10-formularios/README.md)

---

### ¿Necesitas apoyo con este tema?

Si te bloqueaste con la práctica, necesitas revisar tu entorno o adaptar lo aprendido a tu proyecto, podemos trabajarlo en una sesión personalizada.

[**Solicitar asesoría para este tema por WhatsApp**](https://wa.me/573103618296?text=Hola%2C%20Leli.%20Estoy%20estudiando%20Unidad%2009%20%E2%80%94%20Listas%20y%20keys%20del%20curso%20React%20%28https%3A%2F%2Fgithub.com%2Flelyliliana%2FCurso-React%2Ftree%2Fmain%2Funidad09-listas-keys%29%20y%20necesito%20una%20asesor%C3%ADa%20personalizada.%20Mi%20duda%20es%E2%80%A6)
