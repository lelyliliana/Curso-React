# Diagnóstico React

## Build
¿Vite/npm compila?

## Render
¿componente recibe props esperadas?

## Estado
¿quién posee el estado? ¿se mutó?

## Evento
¿handler se ejecuta?

## Efecto
¿realmente necesitas un efecto? ¿dependencias/cleanup?

## Red
¿status/body/cancelación?

## Routing
¿URL coincide? ¿hosting soporta fallback?

## Rendimiento
¿hay evidencia en Profiler?

## Regla
“No actualiza” no es diagnóstico. Sigue evento → estado → render → efecto/red si aplica.
