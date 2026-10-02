# Unidad 07 — Estado con useState
```jsx
const [contador,setContador]=useState(0);
setContador(c=>c+1);
```
No mutar objetos/arrays de estado. Actualización funcional cuando depende del anterior. **Reto:** carrito simple con actualizaciones inmutables.