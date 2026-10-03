# Unidad 32 — Build y publicación de una SPA

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/react/)

## Qué aprenderás
Construir, previsualizar y publicar React comprobando rutas, base path, assets y configuración.

# 1. Build

```bash
npm run build
```

Vite genera salida optimizada, normalmente en `dist/`.

No edites dist manualmente.

# 2. Preview

```bash
npm run preview
```

Permite inspeccionar el build localmente.

No garantiza la misma configuración de routing/caché que el hosting final.

# 3. Base path

Si publicas bajo un subdirectorio, la aplicación y sus assets deben conocer la base apropiada.

Configura Vite/router según hosting.

No asumas raíz de dominio.

# 4. History routing

Una ruta interna puede funcionar navegando desde la SPA y fallar al recargar porque el servidor recibe esa URL directamente.

El hosting necesita fallback/rewrite a index.html o una estrategia compatible como hash routing cuando sea apropiado.

# 5. 404 de la app

Un fallback SPA no significa que cualquier ruta sea válida.

El router debe seguir mostrando su página no encontrada para rutas no definidas.

# 6. Configuración

Comprueba que el build productivo usa endpoint correcto y no contiene localhost o secretos.

# 7. Source maps

Ayudan a diagnosticar producción, pero exponen más detalle del código transformado.

Decide política según proyecto y observabilidad; no los trates como mecanismo principal de seguridad.

# 8. Caché

Assets con hash pueden cachearse agresivamente; index.html suele requerir otra estrategia para descubrir versiones nuevas.

El hosting/CDN controla headers.

# 9. Auditoría pública

Desde la URL desplegada:
- recarga ruta interna;
- abre URL directa;
- revisa Network/Console;
- responsive;
- accesibilidad;
- API/CORS;
- HTTPS.

# 10. Práctica guiada

Publica build y prueba inicio, detalle, 404, refresh y assets.

# 11. Errores frecuentes
- solo probar dev;
- base incorrecta;
- refresh 404;
- localhost en build;
- editar dist;
- asumir caché.

# 12. Reto
SPA publicada donde una ruta interna funciona al abrirse directamente.

# 13. Autoevaluación
1. ¿Qué produce build?
2. ¿Preview = producción?
3. ¿Qué es base path?
4. ¿Por qué refresh 404?
5. ¿Quién controla cache?
6. ¿Qué auditar?

# 14. Checklist
- [ ] Build reproducible.
- [ ] Base correcta.
- [ ] Routing directo.
- [ ] Config productiva.
- [ ] Auditoría pública.

Continúa con taller.


---

## Continuar el curso

- **Unidad anterior:** [Unidad 31 — Configuración y variables de entorno](../unidad31-configuracion/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 33 — Taller integrador React](../unidad33-taller/README.md)
