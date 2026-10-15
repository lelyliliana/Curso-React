# Solución razonada: Estados de un flujo remoto

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md)

## Resultado de la referencia

Los escenarios producen datos, vacío o una categoría visible de fallo.

La implementación completa está en [App.jsx](ejemplo/App.jsx). Si importa un componente de features, revisa también sus reglas, hook/reducer y efectos: la interfaz de la unidad no duplica esa lógica.

## Desarrollo y explicación de la actividad

Con vacio aparece No hay resultados y []: no se trata de un fallo de conexión. HTTP 404 y 500 llegan como Response y requieren comprobar ok. Tras cualquier resultado, busy pasa a false y Cancelar se deshabilita. Los mensajes no muestran una pila de ejecución al estudiante; el diagnóstico técnico se hace en las herramientas del navegador.

## Resolución concreta de la práctica

La tabla esperada es: normal → success, dos filas y categoría null; vacio → empty, cero y null; http500 → error/http; jsoninvalido → error/json; esquemainvalido → error/esquema; lento → error/timeout después del límite. Durante loading se puede cancelar; fuera de loading ese botón está deshabilitado. Una cancelación manual se informa como error/cancelada por decisión explícita de esta demostración.

[Seguir el recorrido del código](DESARROLLO.md) · [Volver a la práctica](PRACTICA.md)

---

## Continuar el curso

- **Unidad anterior:** [Unidad 14: Datos remotos en React](../unidad14-datos-remotos/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 16: Cancelación, cleanup y carreras de red](../unidad16-cancelacion/README.md)
