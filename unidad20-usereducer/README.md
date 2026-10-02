# Unidad 20 — useReducer y transiciones de estado

## Qué aprenderás
Modelar transiciones relacionadas mediante acciones y mantener reducers puros.

# 1. Cuándo aporta

useReducer puede ayudar cuando:
- muchas actualizaciones afectan el mismo estado;
- transiciones tienen nombres de dominio;
- quieres centralizar reglas;
- varios handlers repiten lógica.

No es “useState avanzado obligatorio”.

# 2. Forma

```jsx
const [state, dispatch] =
  useReducer(reducer, initialState);
```

# 3. Reducer

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

# 4. Pureza

Reducer no debe:
- fetch;
- escribir storage;
- cambiar DOM;
- mutar estado;
- generar efectos externos.

Puede calcular el siguiente estado.

# 5. Acción

Una acción describe qué ocurrió/intención:

```js
dispatch({
  type: "quantity/changed",
  id,
  quantity
});
```

Evita acciones genéricas tipo `SET_EVERYTHING` si destruyen el valor del modelo.

# 6. Mutación

Incorrecto:

```js
state.items.push(item);
return state;
```

Devuelve estructuras nuevas para las partes modificadas.

# 7. Estado imposible

Reducer puede imponer transiciones válidas.

Ejemplo: un flujo remoto con status puede rechazar acciones incoherentes o modelarlas explícitamente.

# 8. Inicialización

useReducer admite inicialización lazy para construir estado inicial costoso/derivado de una entrada.

No mezcles persistencia con reducer puro; lee afuera/inicializador y sincroniza aparte.

# 9. Reducer + Context

Pueden combinarse para compartir state/dispatch.

No significa que toda aplicación necesite esta pareja.

# 10. Práctica guiada

Carrito:
- item/added;
- item/removed;
- quantity/changed;
- cart/cleared.

Prueba reducer como función JavaScript pura.

# 11. Errores frecuentes
- reducer con fetch;
- mutar state;
- acción sin significado;
- useReducer para contador trivial;
- reducer+Context por moda.

# 12. Reto
Carrito con reducer probado sin renderizar React.

# 13. Autoevaluación
1. ¿Cuándo useReducer?
2. ¿Reducer puede hacer fetch?
3. ¿Muta state?
4. ¿Qué expresa action?
5. ¿Reducer se puede probar solo?
6. ¿Context obligatorio?

# 14. Checklist
- [ ] Transiciones claras.
- [ ] Reducer puro.
- [ ] Acciones de dominio.
- [ ] Estado inmutable.

Continúa con estado de aplicación.
