# Unidad 21 — Diseñar el estado de una aplicación

## Qué aprenderás
Clasificar estado por naturaleza y asignarlo al propietario adecuado antes de elegir una librería.

# 1. Tipos útiles

**Local UI:** tab, modal, input.  
**Compartido cliente:** carrito o selección usada por varias ramas.  
**URL:** ruta, búsqueda, página, filtros compartibles.  
**Remoto:** productos, pedidos, datos del backend.  
**Persistente cliente:** preferencias o borradores que sobreviven recarga.

# 2. Preguntas

Para cada dato:
1. ¿quién lo necesita?
2. ¿quién lo modifica?
3. ¿de dónde viene?
4. ¿debe sobrevivir recarga?
5. ¿debe aparecer en URL?
6. ¿es copia de otra fuente?

# 3. Local primero

No hagas global un valor porque quizá algún día otro componente lo necesite.

Eleva cuando exista la necesidad.

# 4. URL

Si recargar o compartir debe preservar filtro/página, URL puede ser mejor fuente que Context.

# 5. Server state

Datos remotos tienen frescura, cache, errores, revalidación y concurrencia.

No son simplemente otro useState global.

Herramientas de server state pueden aportar cuando la complejidad lo exige.

# 6. Persistencia

localStorage no debe ser espejo de todo React state.

Persiste solo lo que tiene requisito de sobrevivir.

# 7. Duplicación

Evita mantener el mismo filtro simultáneamente en URL, state, Context y storage sin una razón clara.

Cada copia exige sincronización.

# 8. Mapa

```text
URL ───── filtros
API ───── productos
Context ─ tema
local ─── modal
storage ─ preferencia
```

# 9. Práctica guiada

Clasifica datos de una tienda y asigna fuente/propietario. Identifica cuáles no deberían ser estado.

# 10. Errores frecuentes
- todo global;
- todo local;
- Context para server state complejo;
- storage espejo;
- URL duplicada;
- librería antes de mapear datos.

# 11. Reto
Mapa de estado completo con justificación de cada propietario.

# 12. Autoevaluación
1. ¿Filtro compartible dónde?
2. ¿Qué necesidades tiene server state?
3. ¿Todo debe persistir?
4. ¿Por qué local primero?
5. ¿Por qué evitar copias?
6. ¿Cuándo elegir librería?

# 13. Checklist
- [ ] Clasifico.
- [ ] Propietario claro.
- [ ] Una fuente de verdad.
- [ ] Herramienta después del problema.

Continúa con persistencia.
