# Unidad 27 — React DevTools y depuración

## Qué aprenderás
Investigar renders, props, estado y efectos antes de añadir optimizaciones o modificar dependencias a ciegas.

# 1. Herramientas

Combina:
- React DevTools;
- Console;
- Network;
- Sources;
- Performance.

React DevTools no sustituye las herramientas del navegador.

# 2. Components

Inspecciona:
- árbol;
- props;
- hooks/estado;
- Context.

Pregunta:
> ¿qué entrada cambió para producir esta UI?

# 3. Profiler

Permite observar commits y componentes que renderizaron.

Un render visible en Profiler no es automáticamente un problema.

Primero identifica una interacción lenta.

# 4. Render inesperado

Posibles causas:
- padre renderiza;
- state local;
- Context cambia;
- key cambia;
- prop/referencia cambia.

No concluyas “React renderiza demasiado” sin identificar la causa.

# 5. Effect repetido

Antes de tocar array de dependencias:
1. observa qué dependencia cambia;
2. revisa si el efecto es necesario;
3. revisa si creas objeto/función cada render;
4. comprueba cleanup/StrictMode.

# 6. Estado reiniciado

Busca:
- key variable;
- componente definido dentro de otro;
- cambio de tipo/posición;
- render condicional que desmonta.

# 7. Network

Si un componente carga dos veces, revisa:
- StrictMode dev;
- dos montajes reales;
- dependencia cambiante;
- dos consumidores;
- router/data layer.

No elimines StrictMode como primera solución.

# 8. Why did this render?

Algunas herramientas muestran qué props/hooks cambiaron.

Úsalas como evidencia, no como orden de memoizar todo.

# 9. Práctica guiada

Provoca:
- key random;
- objeto prop nuevo;
- effect dependiente de objeto;
- componente anidado.

Diagnostica cada comportamiento.

# 10. Errores frecuentes
- render = bug;
- memoizar antes de perfilar;
- quitar dependencia;
- desactivar StrictMode;
- ignorar Network;
- confundir dev con producción.

# 11. Reto
Explica un re-render inesperado con evidencia y corrígelo solo si tiene impacto.

# 12. Autoevaluación
1. ¿Render = problema?
2. ¿Qué muestra Profiler?
3. ¿Qué puede reiniciar estado?
4. ¿Qué revisar en effect?
5. ¿StrictMode se desactiva primero?

# 13. Checklist
- [ ] Reproduzco.
- [ ] Inspecciono entradas.
- [ ] Uso Profiler/Network.
- [ ] Optimizo después.

Continúa con rendimiento.
