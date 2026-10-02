# Unidad 28 — Re-renderizados y rendimiento

## Qué aprenderás
Optimizar desde evidencia, colocar estado cerca de quien lo usa y distinguir render costoso de render frecuente.

# 1. Re-render no es DOM completo

React puede volver a ejecutar componentes para calcular UI sin necesariamente reemplazar todo el DOM.

Por eso “renderizó 20 veces” no demuestra lentitud.

# 2. Mide experiencia

Busca:
- input con retraso;
- lista lenta;
- navegación;
- commit costoso.

Después usa Profiler.

# 3. Estado cerca

Si un input local vive en App, cada tecla puede hacer renderizar un árbol grande.

Mover estado al componente que lo necesita puede reducir trabajo y mejorar arquitectura sin memoización.

# 4. Composición

A veces pasar children permite que una parte costosa no dependa del estado del contenedor interactivo.

Diseño de componentes puede ser una optimización.

# 5. Cálculo costoso

Filtrar 20 elementos no necesita useMemo.

Procesar una colección grande/cálculo pesado sí puede merecer medición.

# 6. Listas grandes

Opciones:
- paginar;
- virtualizar;
- reducir DOM;
- server-side filtering.

Memoizar cada fila no arregla necesariamente 100 000 nodos.

# 7. Transiciones

React moderno ofrece mecanismos para marcar actualizaciones no urgentes en ciertos escenarios.

Úsalos cuando la interacción realmente se beneficia y según versión de React; no como sustituto de reducir trabajo.

# 8. Red

Una UI lenta puede estar esperando API.

Profiler React no arregla una respuesta de red de cinco segundos.

# 9. Ciclo

```text
medir
→ hipótesis
→ cambio
→ repetir interacción
→ comparar
```

# 10. Práctica guiada

Lista con búsqueda:
1. baseline;
2. perfil;
3. mueve estado;
4. mide;
5. solo después considera memoización.

# 11. Errores frecuentes
- re-render = DOM;
- memo por defecto;
- estado global innecesario;
- lista enorme sin virtualizar;
- ignorar red;
- optimizar sin baseline.

# 12. Reto
Informe de una interacción lenta con perfil antes/después.

# 13. Autoevaluación
1. ¿Re-render reemplaza todo DOM?
2. ¿Dónde poner estado?
3. ¿20 elementos necesitan memo?
4. ¿Lista enorme se arregla con memo?
5. ¿Qué medir primero?

# 14. Checklist
- [ ] Mido interacción.
- [ ] Estado cercano.
- [ ] Reduzco trabajo.
- [ ] Comparo evidencia.

Continúa con memoización.
