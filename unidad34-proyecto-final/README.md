# Unidad 34 — Proyecto final

## Propósito

Construir y publicar una aplicación React accesible, modular, comprobable y con un modelo de estado justificable.

No es obligatorio utilizar todos los hooks del curso.

# Etapa 1 — Problema

Elige dominio no sensible:
- catálogo;
- biblioteca;
- tareas;
- reservas ficticias;
- películas;
- sensores simulados.

Define usuario, necesidad, alcance y exclusiones.

# Etapa 2 — Modelo de interfaz

Antes de código:
- páginas/rutas;
- árbol de componentes;
- estados de UI;
- navegación.

# Etapa 3 — Mapa de estado

Clasifica cada dato:
- local;
- compartido;
- URL;
- remoto;
- persistente;
- derivado.

Define una fuente de verdad.

# Etapa 4 — Componentes

Construye componentes con responsabilidades claras y HTML semántico.

No extraigas cada etiqueta.

# Etapa 5 — Props y composición

Define APIs pequeñas.

Usa children/regiones donde mejoren flexibilidad.

# Etapa 6 — Estado local

Usa useState para memoria local necesaria.

Actualiza objetos/arrays sin mutación.

No guardes valores derivados.

# Etapa 7 — Formularios

Incluye al menos un formulario real:
- labels;
- submit;
- validación;
- errores;
- foco razonable.

# Etapa 8 — Routing

Incluye:
- listado/inicio;
- detalle u otra ruta significativa;
- 404;
- URL compartible para estado navegable cuando aplique.

Prueba acceso directo.

# Etapa 9 — Datos remotos

Si usa API:
- cliente separado;
- loading;
- success;
- empty;
- error;
- retry;
- cancelación si query cambia.

No dependas de API real en tests.

# Etapa 10 — Efectos

Para cada useEffect documenta:
> ¿con qué sistema externo se sincroniza?

Si no puedes responder, revisa si el efecto es necesario.

# Etapa 11 — Estado compartido

Context/useReducer solo si el mapa lo justifica.

No se otorgan puntos por usar más hooks.

# Etapa 12 — Persistencia

Solo para datos que deban sobrevivir recarga.

Versiona y maneja corrupción.

No almacenes secretos.

# Etapa 13 — Accesibilidad

Prueba:
- teclado;
- foco;
- roles/nombres;
- labels;
- errores;
- navegación SPA;
- dialog si existe;
- zoom/reflow.

# Etapa 14 — Pruebas

Incluye:
- componente/interacción;
- formulario;
- flujo remoto o equivalente;
- error/empty;
- reducer puro si existe.

Usa queries orientadas al usuario.

# Etapa 15 — Error isolation

Si hay widgets independientes, considera boundaries donde un fallo no deba derribar toda la experiencia.

Los errores esperados de red siguen siendo estado, no crashes.

# Etapa 16 — Rendimiento

Solo optimiza un caso reproducible:
1. Profiler;
2. hipótesis;
3. cambio;
4. comparación.

Memo/useMemo/useCallback solo con justificación.

# Etapa 17 — Arquitectura

Organiza proporcionalmente por features/responsabilidades.

No carpetas vacías ni ciclos.

# Etapa 18 — Configuración

API URLs/flags públicos fuera del código rígido.

No secretos en variables frontend.

Incluye archivo de ejemplo cuando corresponda.

# Etapa 19 — Build

Debe ejecutar:

```bash
npm ci
npm test
npm run build
```

Adapta el comando de test al proyecto si la herramienta requiere modo no interactivo para CI.

# Etapa 20 — Publicación

Publica la SPA.

Comprueba:
- base path;
- rutas directas;
- 404;
- assets;
- API/CORS;
- HTTPS.

# Etapa 21 — README

Otra persona debe poder:
1. instalar;
2. ejecutar;
3. probar;
4. construir;
5. entender rutas;
6. entender arquitectura/estado;
7. conocer limitaciones;
8. visitar URL pública.

# Etapa 22 — Revisión

Usa `PLANTILLA_PROYECTO.md`, `RUBRICA.md` y `CHECKLIST.md`.

Pregunta:
- ¿render es puro?
- ¿hay estado duplicado?
- ¿cada effect es necesario?
- ¿keys son estables?
- ¿funciona con teclado?
- ¿red tiene estados completos?
- ¿tests dependen de Internet?
- ¿hay secretos?
- ¿memoización tiene evidencia?
- ¿la ruta interna abre directamente?

# Entregables

- código;
- package/lockfile;
- pruebas;
- README;
- URL publicada;
- mapa de estado;
- diagrama de componentes;
- evidencia de accesibilidad;
- perfil de rendimiento si se optimizó.

# Cierre

> React no consiste en acumular hooks. Consiste en modelar una interfaz como función de datos y estado, mantener efectos bajo control y conservar la semántica de la Web mientras la aplicación crece.
