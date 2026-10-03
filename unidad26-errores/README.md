# Unidad 26 — Errores y Error Boundaries

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/react/)

## Qué aprenderás
Distinguir errores de render, eventos y asincronía y aislar fallos de subárboles.

# 1. Boundary

Un Error Boundary puede capturar ciertos errores lanzados durante render/lifecycle de descendientes y mostrar fallback.

No captura universalmente:
- errores en event handlers;
- errores async arbitrarios;
- errores del propio boundary;
- errores fuera de su subárbol.

# 2. Alcance

```text
App
├── Header
├── ErrorBoundary
│   └── Dashboard
└── Footer
```

Si Dashboard falla, puedes preservar el resto.

# 3. Granularidad

Un boundary en toda la app evita pantalla completamente rota, pero un widget no debería necesariamente derribar toda la página.

Coloca límites según independencia de experiencia.

# 4. Fallback

Debe explicar:
- qué parte falló;
- qué puede hacer la persona;
- retry/reload cuando sea razonable.

No muestres stack trace.

# 5. Logging

El boundary puede reportar detalle técnico a observabilidad.

No incluyas datos sensibles.

# 6. Eventos

```jsx
async function handleSave() {
  try {
    await guardar();
  } catch (error) {
    setError(...);
  }
}
```

Un boundary no sustituye manejo de errores de una acción.

# 7. Async data

Errores de fetch normalmente se modelan como estado de datos/error de flujo, salvo que una librería/framework los integre explícitamente con boundaries.

# 8. Suspense

Suspense y mecanismos modernos de datos pueden interactuar con boundaries según framework/librería.

No confundas “loading boundary” con error boundary.

# 9. Práctica guiada

Haz fallar un widget durante render y comprueba que Header/Footer sobreviven.

Después provoca fallo en click y observa que requiere manejo distinto.

# 10. Errores frecuentes
- boundary captura todo;
- boundary único global;
- stack al usuario;
- fetch error esperado como crash;
- event error sin try/catch/estado.

# 11. Reto
Dashboard con boundary por widget y fallback recuperable.

# 12. Autoevaluación
1. ¿Boundary captura eventos?
2. ¿Fetch esperado?
3. ¿Dónde colocarlo?
4. ¿Qué mostrar?
5. ¿Logging qué evita?
6. ¿Suspense = error boundary?

# 13. Checklist
- [ ] Clasifico errores.
- [ ] Aíslo subárboles.
- [ ] Fallback útil.
- [ ] Manejo eventos aparte.

Continúa con debugging.


---

## Continuar el curso

- **Unidad anterior:** [Unidad 25 — Pruebas de flujos asíncronos](../unidad25-pruebas-flujos/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 27 — React DevTools y depuración](../unidad27-debug/README.md)
