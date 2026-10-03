# Unidad 15 — Loading, error, empty y datos remotos

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/react/)

## Qué aprenderás
Modelar estados remotos explícitos y evitar interfaces ambiguas o spinners infinitos.

# 1. Estados

```text
idle
 ↓
loading
 ├── success con datos
 ├── empty
 └── error
```

Empty es una carga exitosa sin elementos, no un error.

# 2. Estado explícito

```jsx
const [status, setStatus] =
  useState("idle");
const [data, setData] =
  useState([]);
const [error, setError] =
  useState(null);
```

En casos más complejos, useReducer puede modelar transiciones; no es obligatorio todavía.

# 3. Loading

Comunica que una región está cargando.

No reemplaces toda la página si solo se actualiza una lista.

Puedes conservar datos anteriores durante revalidación si esa semántica mejora la experiencia.

# 4. Empty

Si la petición terminó correctamente pero no hay elementos, muestra un estado vacío con contexto y siguiente acción cuando exista.

# 5. Error

Muestra un mensaje comprensible, no stack trace.

El detalle técnico pertenece al diagnóstico.

# 6. Retry

Un botón Reintentar inicia una nueva carga controlada.

Evita reintentos automáticos infinitos.

# 7. Combinaciones imposibles

Con varios booleanos podrías terminar con loading=true, error presente y data antigua sin una semántica clara.

Un status discriminante ayuda a reducir estados imposibles.

# 8. Skeleton

Puede representar estructura durante carga.

No debe parecer contenido real ni provocar movimiento innecesario. Respeta reduced motion si se anima.

# 9. Accesibilidad

- loading comprensible;
- error identificado;
- retry con button;
- anuncios live moderados;
- no mover foco por cada refresco.

# 10. Práctica guiada

Renderiza idle, loading, datos, empty y error usando fixtures antes de conectar una API.

# 11. Errores frecuentes
- spinner único;
- empty como error;
- booleanos contradictorios;
- stack trace al usuario;
- retry infinito;
- aria-live excesivo.

# 12. Reto
Componente remoto que pueda mostrar todos sus estados sin hacer fetch real.

# 13. Autoevaluación
1. ¿Empty es error?
2. ¿Por qué status explícito?
3. ¿Retry infinito?
4. ¿Conservar datos durante refresh puede ser válido?
5. ¿Skeleton es contenido real?

# 14. Checklist
- [ ] Estados explícitos.
- [ ] Empty separado.
- [ ] Error útil.
- [ ] Retry.
- [ ] Accesibilidad.

Continúa con cancelación.


---

## Continuar el curso

- **Unidad anterior:** [Unidad 14 — Datos remotos en React](../unidad14-datos-remotos/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 16 — Cancelación, cleanup y carreras de red](../unidad16-cancelacion/README.md)
