# Unidad 09 — Listas y keys
```jsx
items.map(item=><li key={item.id}>{item.nombre}</li>)
```
Key expresa identidad entre renders. Índice puede ser incorrecto si lista cambia/reordena. **Reto:** lista editable con IDs estables.