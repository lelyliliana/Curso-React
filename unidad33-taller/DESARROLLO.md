# Integrar por contratos y planear una evolución de datos

[Unidad](README.md) · [Práctica](PRACTICA.md) · [Solución](SOLUCIONES.md)

## 1. Ubica la implementación

Abre [features/tareas/reducer.js](../features/tareas/reducer.js) desde la copia completa del curso. Abre el proyecto en http://127.0.0.1:5173/#/proyecto y su vista de catálogo.

## 2. Sigue los datos y las decisiones

El taller comienza en reglas y termina en evidencia de flujos. Antes de montar la interfaz, define título, límite, identidad y cambios válidos. La referencia admite hasta 200 tareas; el id se calcula desde el máximo activo y puede reutilizarse tras borrar ese máximo. Ese contrato no constituye un historial global.

Sigue una edición: el borrador vive en el componente; Guardar despacha editar; el dominio conserva id y completada; el reducer aumenta revisión; el efecto escribe el documento. Cancelar edición solo vacía el borrador y el modo de edición, sin despachar un cambio de la colección.

La extensión de prioridad modifica el esquema persistente. Escribe primero qué admite baja/media/alta, qué valor recibe un registro antiguo y cómo se identifica la versión. No basta añadir un select: el cargador anterior reconstruye registros con sus campos conocidos y puede descartar una propiedad nueva.

Mantén separadas la migración de un documento válido y la recuperación de uno corrupto. Un documento v1 válido puede transformarse siguiendo reglas; un JSON roto no contiene necesariamente información suficiente para reconstruir tareas. Nunca lo declares migrado por haberlo reemplazado con una lista vacía.

## 3. Contrasta una modificación

Completa los flujos del taller y después diseña prioridad en una copia. Declara media para tareas v1, v2 para el documento nuevo y rechazo de prioridades desconocidas. Prueba antes de conectar controles: migración válida, id duplicado, prioridad inválida y JSON roto. Luego verifica el filtro derivado conservando id.

El [modelo completo de prioridad y migración](ejemplo/prioridad.js) permite ensayar estas reglas sin DOM ni Storage. La solución muestra cómo ejecutarlo; la interfaz base no migra datos automáticamente.

## 4. Resuelve y explica

Completa la [práctica](PRACTICA.md) y contrasta después la [solución razonada](SOLUCIONES.md). Anota la entrada o acción, el resultado que predijiste y el observado; utiliza la diferencia para explicar la decisión del tema.
