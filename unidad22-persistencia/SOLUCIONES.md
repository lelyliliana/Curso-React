# Solución razonada: Persistencia y recuperación

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md)

## Resultado de la referencia

Las tareas válidas reaparecen al recargar el mismo origen.

La implementación completa está en [App.jsx](ejemplo/App.jsx). Si importa un componente de features, revisa también sus reglas, hook/reducer y efectos: la interfaz de la unidad no duplica esa lógica.

## Desarrollo y explicación de la actividad

revision comienza en 0 y el efecto retorna sin guardar. Tras agregar una tarea válida pasa a 1 y puede guardar la colección nueva. StrictMode puede invocar lecturas adicionales, pero son lecturas sin escritura. El catch de guardado informa fallo sin deshacer la sesión. No uses localStorage.clear ni prometas un respaldo remoto que no existe.

## Resolución concreta de la práctica

Al cargar `{corrupto`, el aviso debe aparecer y la clave debe conservar ese texto. La sesión comienza vacía. Agregar una tarea válida aumenta revisión y puede sustituir la clave con un documento versionado si la escritura funciona. Ante cuota rechazada, la nueva tarea permanece en memoria y se anuncia que no se guardó. No uses localStorage.clear para reparar una sola clave ni describas el reemplazo como recuperación de datos anteriores.

[Seguir el recorrido del código](DESARROLLO.md) · [Volver a la práctica](PRACTICA.md)

---

## Continuar el curso

- **Unidad anterior:** [Unidad 21: Diseñar el estado de una aplicación](../unidad21-estado-app/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 23: Accesibilidad en React](../unidad23-accesibilidad/README.md)
