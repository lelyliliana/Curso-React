# Unidad 30 — Arquitectura por features

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/react/)

## Qué aprenderás
Organizar una aplicación por funcionalidades y definir dependencias sin imponer una plantilla universal.

# 1. App pequeña

Puede comenzar con pocos archivos/carpetas. No necesitas veinte carpetas vacías.

# 2. Cuando crece

Una opción:

```text
src/
├── app/
├── features/
│   ├── products/
│   └── cart/
└── shared/
```

Agrupa lo que cambia junto.

# 3. Feature

Una feature puede contener componentes, hooks, API, modelo y páginas cuando realmente existen esas responsabilidades.

No crees subcarpetas vacías por plantilla.

# 4. Shared

Coloca allí lo realmente reutilizado y agnóstico.

No muevas algo a shared “por si después”.

# 5. Dependencias

Una regla posible:

```text
app → features → shared
```

Evita que una feature importe internals de otra arbitrariamente.

Coordina mediante API pública o composición desde app.

# 6. API pública

Un index puede exponer las partes soportadas de una feature.

No lo uses para reexportar todo ni esconder ciclos.

# 7. Estado

La arquitectura de carpetas no decide automáticamente dónde vive el estado.

Estado local sigue local; Context/reducer solo cuando el mapa de estado lo justifica.

# 8. Datos remotos

Clientes/queries pueden vivir cerca de la feature.

Una capa API global gigante puede convertirse en cajón de sastre.

# 9. Pruebas

Pueden vivir cerca del código o en estructura acordada.

Prioriza facilidad de encontrar/mantener sobre una convención universal.

# 10. Práctica guiada

Reorganiza catálogo y carrito. Dibuja imports permitidos y elimina un ciclo.

# 11. Errores frecuentes
- arquitectura empresarial para app pequeña;
- shared como basurero;
- carpetas vacías;
- imports internos cruzados;
- index que exporta todo;
- estado global por plantilla.

# 12. Reto
Arquitectura por features con diagrama de dependencias.

# 13. Autoevaluación
1. ¿Cuándo features?
2. ¿Qué va a shared?
3. ¿Carpetas vacías?
4. ¿Cómo coordinar features?
5. ¿Index para qué?
6. ¿Carpetas deciden state?

# 14. Checklist
- [ ] Estructura proporcional.
- [ ] Features coherentes.
- [ ] Dependencias claras.
- [ ] Shared real.

Continúa con configuración.


---

## Continuar el curso

- **Unidad anterior:** [Unidad 29 — memo, useMemo y useCallback](../unidad29-memoizacion/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 31 — Configuración y variables de entorno](../unidad31-configuracion/README.md)
