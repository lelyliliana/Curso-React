# Unidad 19 — Context

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/react/)

## Qué aprenderás
Compartir valores a través de un subárbol sin prop drilling excesivo y comprender el costo de actualizaciones.

# 1. Problema

```text
App
 ↓ theme
Layout
 ↓ theme
Panel
 ↓ theme
Button
```

Si componentes intermedios solo retransmiten un valor, Context puede ayudar.

# 2. Context no es estado por sí solo

Context **transporta un valor**.

El valor puede venir de:
- state;
- reducer;
- prop;
- configuración.

No reemplaza automáticamente useState/useReducer.

# 3. Provider

Conceptualmente:

```jsx
<ThemeContext.Provider value={theme}>
  <App />
</ThemeContext.Provider>
```

Los consumidores bajo ese provider reciben el valor más cercano.

La API concreta puede evolucionar entre versiones de React; sigue la versión del proyecto.

# 4. Buenos candidatos

Frecuentes:
- tema;
- idioma;
- sesión/identidad leída ampliamente;
- configuración estable;
- servicios compartidos.

No porque sean “globales”, sino porque muchos descendientes los necesitan.

# 5. Todo en Context

Un objeto gigante:

```text
{usuario, carrito, modal, formulario, filtros, reloj,...}
```

puede acoplar partes no relacionadas y provocar actualizaciones amplias.

Divide por responsabilidades cuando exista necesidad real.

# 6. Re-render

Cuando cambia el value, consumidores pueden volver a renderizar.

Crear un objeto nuevo en cada render puede importar si causa actualizaciones innecesarias en un árbol grande.

No memoices el value por reflejo: primero identifica un problema.

# 7. Context vs composición

A veces puedes evitar prop drilling pasando un componente/children más cerca del lugar que lo necesita.

No uses Context antes de considerar composición.

# 8. Estado remoto

Datos de servidor con cache/revalidación suelen tener necesidades distintas del estado compartido local.

No conviertas Context en una cache remota casera automáticamente.

# 9. Práctica guiada

Implementa tema:
- provider;
- consumidor profundo;
- toggle.

Observa renders con React DevTools.

# 10. Errores frecuentes
- Context = state manager completo;
- un Context para todo;
- memoizar sin medir;
- Context para datos remotos complejos;
- usarlo cuando composición bastaba.

# 11. Reto
Tema compartido con provider pequeño y persistencia separada.

# 12. Autoevaluación
1. ¿Context guarda estado por sí mismo?
2. ¿Qué problema resuelve?
3. ¿Todo global va a Context?
4. ¿Qué pasa cuando cambia value?
5. ¿Composición puede evitarlo?
6. ¿Cache remota = Context?

# 13. Checklist
- [ ] Context con propósito.
- [ ] Value pequeño/coherente.
- [ ] Consumidores necesarios.
- [ ] Sin optimización prematura.

Continúa con reducer.


---

## Continuar el curso

- **Unidad anterior:** [Unidad 18 — Routing y URL como estado](../unidad18-routing/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 20 — useReducer y transiciones de estado](../unidad20-usereducer/README.md)
