# Solución razonada: Organización por responsabilidad

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md)

## Resultado de la referencia

La feature ofrece CRUD, filtros y guardado con reglas independientes.

La implementación completa está en [App.jsx](ejemplo/App.jsx). Si importa un componente de features, revisa también sus reglas, hook/reducer y efectos: la interfaz de la unidad no duplica esa lógica.

## Desarrollo y explicación de la actividad

Tareas importa dominio, reducer y almacenamiento; reducer y almacenamiento dependen de dominio. El cliente del catálogo y su hook no dependen del estado local de tareas. La acción lleva id estable, no índice visible. Un ciclo dominio → Tareas → dominio mezclaría presentación y reglas; conservar límites permite probar transformaciones con Node.

## Resolución concreta de la práctica

La búsqueda solicitada ya está implementada: buscar es estado local y filtrarTareas combina criterios. Para ampliar sin duplicarla, calcula `estado.tareas.filter(t => !t.completada).length` durante render y muestra esa cuenta. Editar desde un filtro conserva id y estado; filtrar no elimina datos. El mapa de dependencias no debe contener una flecha del dominio a Tareas ni Storage dentro del reducer.

[Seguir el recorrido del código](DESARROLLO.md) · [Volver a la práctica](PRACTICA.md)

---

## Continuar el curso

- **Unidad anterior:** [Unidad 29: memo, useMemo y useCallback](../unidad29-memoizacion/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 31: Configuración y variables de entorno](../unidad31-configuracion/README.md)
