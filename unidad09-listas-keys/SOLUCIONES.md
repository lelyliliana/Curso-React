# Solución razonada: Identidad al reordenar

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md)

## Resultado de la referencia

El alias editado de Ana sigue junto a Ana después de invertir el orden.

La implementación completa está en [App.jsx](ejemplo/App.jsx). Si importa un componente de features, revisa también sus reglas, hook/reducer y efectos: la interfaz de la unidad no duplica esa lógica.

## Desarrollo y explicación de la actividad

Con id, cada input conserva su identidad. Con índice, React conserva el nodo de la posición aunque ahora represente otra persona; un valor no controlado puede quedar junto al nombre equivocado. La explicación no es que reverse sea asíncrono ni que necesites forzar otro render. La reparación es usar la identidad del registro y preservar correctamente los datos del estado.

## Resolución concreta de la práctica

Con `key={p.id}`, Alfa debe seguir en Alias de Ana y Beta en Alias de Luis después de cada inversión. La variante `personas.map((p, indice) => ...)` con key por indice conserva posiciones y puede asociar los valores al nombre equivocado. Restaurar el id corrige la política; vuelve a montar para empezar una comparación limpia. Mantén la copia previa a reverse en ambas versiones.

[Seguir el recorrido del código](DESARROLLO.md) · [Volver a la práctica](PRACTICA.md)

---

## Continuar el curso

- **Unidad anterior:** [Unidad 08: Renderizado condicional](../unidad08-condicional/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 10: Formularios en React](../unidad10-formularios/README.md)
