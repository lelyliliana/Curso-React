# Unidad 20 — useReducer
Útil cuando transiciones de estado son numerosas/relacionadas.
```jsx
const [state,dispatch]=useReducer(reducer,inicial);
```
Reducer debe ser puro.
**Reto:** carrito con acciones agregar/quitar/vaciar.