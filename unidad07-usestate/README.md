# Unidad 07 — Estado con useState

## Qué aprenderás
Modelar memoria del componente, comprender snapshots y actualizar objetos/arrays sin mutarlos.

# 1. Estado

```jsx
const [contador, setContador] =
  useState(0);
```

contador es el valor de este render. El setter solicita una actualización.

# 2. Setter no cambia el snapshot

```jsx
console.log(contador);
setContador(contador + 1);
console.log(contador);
```

Los dos logs pueden mostrar el mismo valor porque pertenecen al mismo render.

# 3. Actualización funcional

Cuando depende del anterior:

```jsx
setContador(c => c + 1);
```

Es especialmente importante cuando existen varias actualizaciones pendientes.

# 4. Varias actualizaciones

Tres llamadas:

```jsx
setContador(contador + 1);
setContador(contador + 1);
setContador(contador + 1);
```

usan el mismo snapshot.

Con updaters:

```jsx
setContador(c => c + 1);
setContador(c => c + 1);
setContador(c => c + 1);
```

cada updater recibe el estado pendiente anterior según las reglas de React.

# 5. Objetos

No mutes el objeto existente.

```jsx
setUsuario(u => ({
  ...u,
  nombre: "Ana"
}));
```

# 6. Arrays

```jsx
setItems(items =>
  items.filter(item => item.id !== id)
);
```

Usa transformaciones no mutantes.

# 7. Estado mínimo

No guardes nombre, apellido y nombreCompleto si nombreCompleto puede calcularse durante render.

Duplicar estado puede desincronizarlo.

# 8. Inicialización lazy

```jsx
useState(() => calcularInicial())
```

es útil cuando la inicialización es costosa.

No hace falta para valores triviales.

# 9. Identidad

React asocia estado con la posición/identidad del componente en el árbol.

Cambiar estructura o key puede reiniciar estado intencionalmente o por accidente.

# 10. Práctica guiada

Carrito:
- agregar;
- cambiar cantidad;
- eliminar;
- total derivado.

Guarda solo estado mínimo.

# 11. Errores frecuentes
- setter como asignación inmediata;
- mutar estado;
- guardar valores derivados;
- varias actualizaciones usando snapshot esperando acumulación;
- useState para constantes.

# 12. Reto
Carrito con actualizaciones inmutables y total calculado.

# 13. Autoevaluación
1. ¿Estado es snapshot?
2. ¿Setter cambia variable actual?
3. ¿Cuándo updater?
4. ¿Por qué no mutar?
5. ¿Qué es estado derivado?
6. ¿Estado se asocia con qué?

# 14. Checklist
- [ ] Estado mínimo.
- [ ] Actualización inmutable.
- [ ] Updater cuando corresponde.
- [ ] Derivo lo calculable.

Continúa con render condicional.
