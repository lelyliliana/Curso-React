# Unidad 23 — Accesibilidad en React

## Qué aprenderás
Preservar semántica HTML y gestionar foco/estado cuando la interfaz cambia dinámicamente.

# 1. React no cambia HTML

Acción:

```jsx
<button type="button">Guardar</button>
```

Navegación: enlace.

No uses div onClick y luego intentes reconstruir teclado/roles con ARIA.

# 2. Labels

```jsx
<label htmlFor="email">Correo</label>
<input id="email" />
```

Los fundamentos del curso HTML/CSS siguen vigentes.

# 3. IDs

Para componentes reutilizables, `useId` puede generar IDs estables para relaciones de accesibilidad como label/control/descripciones.

No uses useId como key de listas de datos; las keys deben venir de la identidad del dato.

# 4. Foco

Muévelo cuando el flujo lo requiere:
- abrir/cerrar dialog;
- error de envío complejo;
- navegación SPA en ciertos diseños.

No llames focus después de cada render.

# 5. Refs

```jsx
const inputRef = useRef(null);
inputRef.current?.focus();
```

Ref permite acceso imperativo cuando realmente necesitas interactuar con DOM/sistema externo.

No guardes en ref datos que deberían provocar render.

# 6. Mensajes dinámicos

`role="status"` / regiones live pueden anunciar actualizaciones no enfocadas.

`role="alert"` es más urgente.

No hagas toda la aplicación live.

# 7. Dialog

Un modal requiere:
- nombre;
- foco inicial;
- cierre;
- Escape;
- retorno de foco;
- fondo no interactuable cuando es modal.

Usa componentes/librerías accesibles o APIs nativas apropiadas cuando el problema lo justifique; no improvises solo CSS.

# 8. Routing

Tras navegación SPA, el usuario de lector de pantalla puede necesitar contexto del cambio.

Actualiza título y considera gestión de foco/heading según aplicación.

# 9. Loading

Skeleton/spinner debe tener alternativa textual cuando sea necesario.

No anuncies cada cambio de porcentaje si genera ruido.

# 10. Práctica guiada

Implementa formulario + dialog y prueba:
- Tab/Shift+Tab;
- Enter/Escape;
- foco inicial/retorno;
- labels;
- errores;
- anuncios.

# 11. Errores frecuentes
- div button;
- useId como key;
- focus en cada render;
- ref como estado invisible;
- aria-live global;
- modal solo visual.

# 12. Reto
Flujo accesible abrir dialog→interactuar→cerrar→retornar foco.

# 13. Autoevaluación
1. ¿React reemplaza semántica?
2. ¿useId para key?
3. ¿Cuándo ref?
4. ¿role status/alert?
5. ¿Qué necesita dialog?
6. ¿Navegación SPA puede necesitar foco?

# 14. Checklist
- [ ] HTML nativo.
- [ ] Foco intencional.
- [ ] IDs correctos.
- [ ] Anuncios moderados.
- [ ] Prueba teclado.

Continúa con pruebas.
