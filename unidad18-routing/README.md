# Unidad 18 — Routing y URL como estado

## Qué aprenderás
Relacionar URL con vistas, parámetros y navegación, preservando enlaces compartibles y semántica web.

# 1. SPA no elimina URL

Una aplicación React puede cambiar vistas sin recargar documento completo, pero la URL sigue siendo parte esencial de la Web.

Si una vista representa algo navegable/compartible, considera expresarlo en URL.

# 2. Router

Una librería de routing compatible con el proyecto suele resolver:
- rutas;
- parámetros;
- navegación;
- layouts;
- 404;
- búsqueda/query.

La API exacta cambia entre versiones. Comprende conceptos antes de memorizar funciones.

# 3. Enlace vs botón

Para navegar usa el componente/enlace que produzca semántica de link.

No uses button + navigate para todo si conceptualmente es un enlace.

Esto conserva:
- abrir en nueva pestaña;
- copiar URL;
- semántica;
- comportamiento esperado.

# 4. Parámetros

```text
/productos/42
```

42 identifica el recurso/ruta.

Valida el parámetro antes de usarlo y maneja recurso inexistente.

# 5. Query params

```text
/productos?q=react&page=2
```

Filtros, búsqueda, página u orden pueden pertenecer a URL cuando compartir/volver/recargar debe preservar ese estado.

No dupliques URL state en useState sin necesidad.

# 6. 404

Distingue:
- ruta no existente;
- ruta válida con recurso inexistente.

Ambas pueden mostrar “no encontrado”, pero provienen de capas distintas.

# 7. Navegación programática

Es apropiada después de acciones como:
- login exitoso;
- creación completada;
- flujo de wizard.

No reemplaza enlaces normales.

# 8. Accesibilidad

Al cambiar de ruta en una SPA, considera:
- título del documento;
- foco/anuncio del nuevo contenido cuando sea necesario;
- headings;
- estado activo de navegación.

El navegador no hace automáticamente todo lo que ocurriría en una navegación documental completa.

# 9. Práctica guiada

Catálogo:
- /productos;
- /productos/:id;
- ?q=;
- ruta 404.

Recarga cada URL directamente y verifica que siga funcionando en el hosting/router elegido.

# 10. Errores frecuentes
- toda navegación con button;
- filtro compartible solo en state;
- 404 de ruta = 404 de recurso;
- URL que falla al recargar en hosting;
- cambio de ruta sin título/foco apropiado.

# 11. Reto
Catálogo con detalle, filtros en URL y página no encontrada.

# 12. Autoevaluación
1. ¿SPA elimina URL?
2. ¿Cuándo query param?
3. ¿Link vs button?
4. ¿404 de ruta/recurso?
5. ¿Navegación programática cuándo?
6. ¿Qué revisar en accesibilidad?

# 13. Checklist
- [ ] URL significativa.
- [ ] Enlaces semánticos.
- [ ] Parámetros validados.
- [ ] Recarga funciona.
- [ ] Navegación accesible.

Continúa con Context.
