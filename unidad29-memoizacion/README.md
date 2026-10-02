# Unidad 29 — memo, useMemo y useCallback

## Qué aprenderás
Aplicar memoización cuando evita trabajo medido y comprender su costo/limitaciones.

# 1. React.memo

```jsx
const Fila = memo(function Fila(props) {
  ...
});
```

Puede evitar render de un componente cuando sus props se consideran iguales según la comparación aplicable.

No evita render si una prop relevante cambia.

# 2. Referencias

```jsx
<Fila options={{ compact: true }} />
```

crea un objeto nuevo en cada render.

Eso puede invalidar memo.

No conviertas automáticamente cada objeto en useMemo: primero comprueba que Fila es costosa y memo aporta.

# 3. useMemo

```jsx
const visibles = useMemo(
  () => filtrar(items, query),
  [items, query]
);
```

Cachea el resultado de un cálculo entre renders bajo dependencias.

Es una optimización, no garantía semántica que deba sostener lógica de negocio.

# 4. useCallback

```jsx
const eliminar = useCallback(
  id => dispatch({ type: "remove", id }),
  []
);
```

Cachea la referencia de una función.

Es útil cuando esa estabilidad tiene un consumidor que se beneficia, por ejemplo un hijo memoizado o una dependencia donde el diseño lo exige.

# 5. Costos

Memoización añade:
- comparación;
- memoria;
- dependencias;
- complejidad mental.

Puede no mejorar o incluso empeorar.

# 6. React Compiler / herramientas modernas

Ecosistemas React modernos pueden automatizar ciertas optimizaciones según toolchain/versiones.

No bases fundamentos del curso en que una optimización automática exista; escribe componentes correctos y mide.

# 7. Dependencias

No uses useMemo/useCallback para “engañar” el linter de effects.

Primero revisa si el efecto/arquitectura es correcta.

# 8. Práctica guiada

Componente costoso:
1. perfila sin memo;
2. memo;
3. prop objeto rompe memo;
4. estabiliza solo esa referencia;
5. compara.

# 9. Errores frecuentes
- memo en todo;
- useMemo para valor trivial;
- useCallback para cada handler;
- depender de memo para corrección;
- callar linter;
- no medir costo.

# 10. Reto
Demuestra con Profiler un caso donde memo ayuda y otro donde no aporta.

# 11. Autoevaluación
1. ¿memo garantiza no render?
2. ¿Qué cachea useMemo?
3. ¿useCallback?
4. ¿Qué cuesta memoizar?
5. ¿Sirve para corrección?
6. ¿Por qué medir?

# 12. Checklist
- [ ] Problema medido.
- [ ] Herramienta apropiada.
- [ ] Dependencias correctas.
- [ ] Comparación antes/después.

Continúa con arquitectura.
