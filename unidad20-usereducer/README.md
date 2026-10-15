# Unidad 20: useReducer y transiciones de estado

**[Recorrido del código y resolución paso a paso](DESARROLLO.md)**

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/react/)

## Qué aprenderás
Modelar transiciones relacionadas mediante acciones y mantener reducers puros.

## 1. Cuándo aporta

useReducer puede ayudar cuando:

- muchas actualizaciones afectan el mismo estado;
- transiciones tienen nombres de dominio;
- quieres centralizar reglas;
- varios handlers repiten lógica.

No es “useState avanzado obligatorio”.

## 2. Forma

```jsx
const [state, dispatch] =
  useReducer(reducer, initialState);
```

## 3. Reducer

```js
function reducer(state, action) {
  switch (action.type) {
    case "item/added":
      return {
        ...state,
        items: [...state.items, action.item]
      };
    default:
      return state;
  }
}
```

Recibe estado/acción y devuelve siguiente estado.

## 4. Pureza

Reducer no debe:

- fetch;
- escribir storage;
- cambiar DOM;
- mutar estado;
- generar efectos externos.

Puede calcular el siguiente estado.

## 5. Acción

Una acción describe qué ocurrió/intención:

```js
dispatch({
  type: "quantity/changed",
  id,
  quantity
});
```

Evita acciones genéricas tipo `SET_EVERYTHING` si destruyen el valor del modelo.

## 6. Mutación

Incorrecto:

```js
function reducerIncorrecto(state, action) {
  state.items.push(action.item);
  return state;
}
```

Devuelve estructuras nuevas para las partes modificadas.

## 7. Estado imposible

Reducer puede imponer transiciones válidas.

Ejemplo: un flujo remoto con status puede rechazar acciones incoherentes o modelarlas explícitamente.

## 8. Inicialización

useReducer admite inicialización lazy para construir estado inicial costoso/derivado de una entrada.

No mezcles persistencia con reducer puro; lee afuera/inicializador y sincroniza aparte.

## 9. Reducer + Context

Pueden combinarse para compartir state/dispatch.

No significa que toda aplicación necesite esta pareja.

## 10. Práctica guiada

Carrito:

- item/added;
- item/removed;
- quantity/changed;
- cart/cleared.

Prueba reducer como función JavaScript pura.

## 11. Errores frecuentes

- reducer con fetch;
- mutar state;
- acción sin significado;
- useReducer para contador trivial;
- reducer+Context por moda.

## 12. Reto
Carrito con reducer probado sin renderizar React.

## 13. Autoevaluación

1. ¿Cuándo useReducer?
2. ¿Reducer puede hacer fetch?
3. ¿Muta state?
4. ¿Qué expresa action?
5. ¿Reducer se puede probar solo?
6. ¿Context obligatorio?

## 14. Checklist

- [ ] Transiciones claras.
- [ ] Reducer puro.
- [ ] Acciones de dominio.
- [ ] Estado inmutable.

Continúa con estado de aplicación.

## Laboratorio desarrollado: Reducer y acciones

### Modelo, contrato y decisiones

El reducer recibe estado anterior y una acción y calcula un estado siguiente sin DOM, red ni almacenamiento. Para cada entrada válida, el resultado debe ser reproducible. dispatch no cambia inmediatamente la variable cantidad del handler actual. La acción expresa intención; el componente no tiene que reproducir cada paso de la transición. En el proyecto las reglas de tareas se componen en un reducer que informa fallos sin perder datos ni incrementar una revisión válida.

### Preparar y abrir

Sigue [ENTORNO.md](../docs/ENTORNO.md) desde la raíz del curso. Después abre http://127.0.0.1:5173/#/laboratorio/20. El [archivo App.jsx](ejemplo/App.jsx) es el componente completo de la unidad. GitHub muestra código fuente: para interactuar necesitas la copia local y el servidor Vite.

No hace falta un proyecto npm distinto por unidad. El [índice de laboratorios](../src/App.jsx) carga este componente y conserva la navegación. Los estilos y la entrada comunes están en src. Si lo copias a otro proyecto, conserva los imports que use y el contexto de router cuando corresponda; un fragmento aislado no incluye automáticamente esas dependencias.

### Resultado esperado

restar desde 0 mantiene 0; sumar y reiniciar cambian el número.

### Implementación completa del componente

```jsx
import { useReducer } from "react";
export function reducer(cantidad, accion) {
  switch (accion.type) {
    case "sumar":
      return cantidad + 1;
    case "restar":
      return Math.max(0, cantidad - 1);
    case "reiniciar":
      return 0;
    default:
      throw new Error("Acción desconocida");
  }
}
export default function App() {
  const [cantidad, dispatch] = useReducer(reducer, 0);
  return (
    <section>
      <h2>Acciones y transición pura</h2>
      <p role="status">Cantidad: {cantidad}</p>
      {["sumar", "restar", "reiniciar"].map((type) => (
        <button key={type} type="button" onClick={() => dispatch({ type })}>
          {type}
        </button>
      ))}
    </section>
  );
}
```

### Experimentar y comprobar

Añade sumarDos al reducer y comprueba los límites en una prueba pura. Llama dos veces al reducer con la misma entrada y compara resultados.

**Casos que debes registrar:** 0; sumar; sumarDos; reiniciar; acción desconocida; dos invocaciones iguales.

### Actividad y solución

Realiza [PRACTICA.md](PRACTICA.md) y consulta después [SOLUCIONES.md](SOLUCIONES.md). La solución explica qué decisión conserva el contrato; no exige copiar exactamente los mismos nombres. Cuando haya controles, recórrelos también con teclado y verifica que un error no elimine la posibilidad de corregirlo.

---

## Continuar el curso

- **Unidad anterior:** [Unidad 19: Context](../unidad19-context/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 21: Diseñar el estado de una aplicación](../unidad21-estado-app/README.md)

---

### ¿Necesitas apoyo con este tema?

Si te bloqueaste con la práctica, necesitas revisar tu entorno o adaptar lo aprendido a tu proyecto, podemos trabajarlo en una sesión personalizada.

[**Solicitar asesoría para este tema por WhatsApp**](https://wa.me/573103618296?text=Hola%2C%20Leli.%20Estoy%20estudiando%20Unidad%2020%20%E2%80%94%20useReducer%20del%20curso%20React%20%28https%3A%2F%2Fgithub.com%2Flelyliliana%2FCurso-React%2Ftree%2Fmain%2Funidad20-usereducer%29%20y%20necesito%20una%20asesor%C3%ADa%20personalizada.%20Mi%20duda%20es%E2%80%A6)
