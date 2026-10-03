# Unidad 16 — Cancelación, cleanup y carreras de red

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/react/)

## Qué aprenderás
Evitar que una respuesta antigua actualice estado nuevo y cancelar trabajo que dejó de ser relevante.

# 1. Carrera

```text
"ca"   → request A
"casa" → request B
```

B termina primero y muestra casa.

Después A termina y sobrescribe con ca.

La red funcionó; el estado quedó incorrecto.

# 2. AbortController

```jsx
useEffect(() => {
  const controller =
    new AbortController();

  cargar(query, controller.signal);

  return () => {
    controller.abort();
  };
}, [query]);
```

Cuando query cambia, cleanup aborta la solicitud anterior.

# 3. Abort intencional

Una cancelación porque cambió la consulta no debería mostrarse como error del servidor.

Distingue abort de fallos que la persona necesita conocer.

# 4. Ignorar resultados

También puedes proteger el estado con una bandera/identificador que descarte resultados obsoletos.

Abortar ahorra trabajo cuando la API lo soporta; ignorar evita aplicar un resultado viejo.

# 5. Cleanup no solo al desmontar

Cuando una dependencia cambia:

```text
cleanup del efecto anterior
→ setup del nuevo efecto
```

Este modelo es fundamental.

# 6. Debounce

Puede reducir peticiones en un buscador, pero no sustituye completamente la protección contra respuestas fuera de orden.

# 7. Carrera del loading

Si A se cancela porque B empezó, el finally de A no debería poner loading=false mientras B sigue activa.

Asocia las transiciones al request vigente o diseña el estado para evitarlo.

# 8. Librerías de datos

Herramientas especializadas pueden gestionar cancelación, deduplicación y cache.

Comprende primero el problema que delegas.

# 9. Práctica guiada

Buscador:
1. escribe rápido;
2. simula latencias invertidas;
3. reproduce la carrera;
4. corrige;
5. observa Network.

# 10. Errores frecuentes
- abort como error visible;
- cleanup solo al unmount;
- finally viejo pisa loading nuevo;
- debounce como única protección;
- respuesta vieja sobrescribe.

# 11. Reto
Buscador sin resultados obsoletos bajo latencias invertidas.

# 12. Autoevaluación
1. ¿Qué es carrera?
2. ¿Cuándo cleanup?
3. ¿Abort e ignorar son iguales?
4. ¿Debounce evita toda carrera?
5. ¿Qué puede hacer un finally viejo?

# 13. Checklist
- [ ] Cancelo o ignoro.
- [ ] Cleanup correcto.
- [ ] Estado vigente.
- [ ] Sin error falso por abort.

Continúa con custom hooks.


---

## Continuar el curso

- **Unidad anterior:** [Unidad 15 — Loading, error, empty y datos remotos](../unidad15-estados-remotos/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 17 — Custom hooks](../unidad17-custom-hooks/README.md)
