# Solución razonada: Snapshot, cola y actualizadores

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md)

## Resultado de la referencia

Una pulsación en Sumar tres produce Cantidad: 3.

La implementación completa está en [App.jsx](ejemplo/App.jsx). Si importa un componente de features, revisa también sus reglas, hook/reducer y efectos: la interfaz de la unidad no duplica esa lógica.

## Desarrollo y explicación de la actividad

Los tres reemplazos se calculan desde el mismo snapshot, de modo que solicitan el mismo valor siguiente: desde 0, el resultado es 1. La variante funcional encadena 1, 2 y 3. Reiniciar solicita 0 y una nueva pulsación vuelve a 3. Batching organiza actualizaciones; no convierte la variable capturada en una referencia mutable al estado más reciente.

## Resolución concreta de la práctica

La referencia usa tres actualizadores y acumula tres por pulsación. Sustituir los tres por setCantidad(cantidad + 1) produce solo uno por pulsación. Para explicar la diferencia escribe las entradas de la cola, no tres logs que supongan una asignación inmediata. Reiniciar usa setCantidad(0) correctamente. El [componente original](ejemplo/App.jsx) conserva ambas acciones sin agregar un efecto.

[Seguir el recorrido del código](DESARROLLO.md) · [Volver a la práctica](PRACTICA.md)

---

## Continuar el curso

- **Unidad anterior:** [Unidad 06: Eventos en React](../unidad06-eventos/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 08: Renderizado condicional](../unidad08-condicional/README.md)
