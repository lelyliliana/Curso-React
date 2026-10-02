# Unidad 11 — Estado derivado y lifting state up

## Qué aprenderás
Mantener una sola fuente de verdad, derivar valores y elevar estado al ancestro común cuando componentes necesitan coordinarse.

# 1. Estado duplicado

Evita:

```jsx
const [productos, setProductos] = useState([]);
const [filtrados, setFiltrados] = useState([]);
```

si filtrados siempre puede calcularse desde productos + filtro.

# 2. Derivar durante render

```jsx
const visibles = productos.filter(
  p => p.nombre.includes(filtro)
);
```

No necesitas un efecto para mantenerlo sincronizado.

# 3. Por qué duplicar falla

Si actualizas productos pero olvidas filtrados, la UI queda inconsistente.

Cada copia añade sincronización.

# 4. Lifting state up

Dos hermanos necesitan la misma selección:

```text
       Padre
       estado
      /     \
 Selector  Detalle
```

El padre posee estado y pasa valor/callbacks.

# 5. No eleves demasiado

Estado que solo necesita un input no tiene por qué vivir en App.

Colócalo en el ancestro común **más cercano** que necesita coordinarlo.

# 6. Estado vs prop

Si un hijo recibe `color` y crea:

```jsx
const [localColor, setLocalColor] =
  useState(color);
```

esa copia no se actualiza automáticamente cuando prop cambia.

Antes de copiar prop a estado pregunta por qué necesitas dos fuentes.

# 7. Reset intencional

Si un editor debe reiniciarse cuando cambia la entidad, puedes:
- diseñar estado controlado;
- cambiar key deliberadamente;
- manejar transición explícita.

No sincronices automáticamente cada prop con useEffect sin analizar.

# 8. Totales

```jsx
const total = carrito.reduce(...);
```

es derivado.

Si el cálculo fuera realmente costoso, primero mide; memoización viene después.

# 9. Práctica guiada

Buscador:
- filtro en padre;
- campo hijo;
- lista hija;
- resultados derivados.

Después mueve estado hacia abajo/arriba y observa qué componentes realmente lo necesitan.

# 10. Errores frecuentes
- estado para datos calculables;
- useEffect para sincronizar derivados;
- copiar prop a state;
- todo en App;
- memoizar antes de medir.

# 11. Reto
Filtro + lista + contador sin estado duplicado ni efecto de sincronización.

# 12. Autoevaluación
1. ¿Qué es estado derivado?
2. ¿Necesita useEffect?
3. ¿Dónde elevar estado?
4. ¿Copiar prop a state es automático?
5. ¿Todo estado en App?
6. ¿Total necesita state?

# 13. Checklist
- [ ] Una fuente de verdad.
- [ ] Derivo durante render.
- [ ] Elevo solo lo compartido.
- [ ] Evito sincronización artificial.

Continúa con efectos.
