# Unidad 05 — Composición
children permite envolver contenido. Prefiere composición a jerarquías complejas.
```jsx
function Panel({children}){return <section>{children}</section>}
```
**Reto:** Card reutilizable mediante composición.