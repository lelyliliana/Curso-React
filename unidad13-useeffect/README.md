# Unidad 13 — useEffect
```jsx
useEffect(()=>{ const id=setInterval(...); return ()=>clearInterval(id); },[]);
```
Dependencias describen valores reactivos usados. Cleanup evita recursos obsoletos. **Reto:** suscripción/timer con limpieza.