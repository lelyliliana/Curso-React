# Solución razonada: Medir render y commit

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md)

## Resultado de la referencia

Actualizar padre cambia cantidad y permite observar logs de perfil en desarrollo.

La implementación completa está en [App.jsx](ejemplo/App.jsx). Si importa un componente de features, revisa también sus reglas, hook/reducer y efectos: la interfaz de la unidad no duplica esa lógica.

## Desarrollo y explicación de la actividad

Compara condiciones, tamaños y entorno similares. Una duración aislada puede reflejar carga, calentamiento y precisión del reloj. El índice es una key admisible aquí porque la colección fija no se reordena ni tiene estado por fila; no generalices ese ejemplo a tareas editables. Mide antes de adoptar memo y conserva el contrato visible durante cada comparación.

## Resolución concreta de la práctica

Entrega dos grupos de diez muestras bajo las mismas condiciones y separa montaje de update. Informa equipo, navegador, modo y tamaño de lista. Un resultado admisible puede ser que no se observe una mejora relevante; no es obligatorio añadir memo. La cantidad debe seguir actualizándose y la lista conservar su contenido. Contar logs no reemplaza medir duración ni observar la experiencia.

[Seguir el recorrido del código](DESARROLLO.md) · [Volver a la práctica](PRACTICA.md)

---

## Continuar el curso

- **Unidad anterior:** [Unidad 27: React DevTools y depuración](../unidad27-debug/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 29: memo, useMemo y useCallback](../unidad29-memoizacion/README.md)
