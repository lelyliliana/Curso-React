# Solución razonada del proyecto final

[Enunciado](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md)

## Resultado y fuentes de datos

La aplicación de [referencia](../ejemplos/app-referencia/README.md) es completa dentro del proyecto común. En /#/proyecto presenta tareas; en /#/proyecto/catalogo presenta el catálogo. El router común ya existe: no anida un segundo HashRouter.

La colección de tareas pertenece al reducer. Campo y modo de edición son estado local del formulario; filtros y búsqueda controlan una vista derivada. Los datos remotos pertenecen al hook de catálogo y no reemplazan la colección de tareas. No se utiliza Context solo para evitar pasar una prop entre dos componentes cercanos.

## Identidad y pureza

El dominio valida registros y devuelve copias. El reducer calcula una transición reproducible, con revisión solo para cambios válidos. Keys usan id, y acciones también usan id. Esa coincidencia no significa que key sea una prop: el identificador que necesita una acción se conserva explícitamente en su registro.

## Efectos

La lectura inicial valida JSON sin escritura. Un error de carga conserva la clave; después de una acción válida puede guardarse otra colección. El efecto de persistencia observa colección y revisión y maneja errores, conservando memoria. Los datos no se escriben durante render ni desde el reducer.

El hook remoto limpia pendientes al desmontar e identifica cada nueva solicitud. El cliente valida HTTP, JSON y estructura y conserva timer hasta terminar lectura. La defensa ante respuesta obsoleta no depende exclusivamente de que abort se atienda.

La navegación actualiza título y un destino de foco estable. Agregar/editar restaura el foco del campo; completar/eliminar también proporciona un destino si la fila deja de existir en la vista. Son efectos de interfaz distintos del dominio de tareas.

## Evidencia y límites

La suite de componentes prueba entradas, callbacks, CRUD, corrupción, fallo de escritura y resultados remotos. La de Node prueba reglas y HTTP controlado. El recorrido de Firefox comprueba laboratorios y proyecto con anchos y texto ampliado. No constituye una certificación de accesibilidad ni una prueba de todos los navegadores.

El guardado usa un solo origen de navegador y no coordina pestañas. Los id pueden reutilizarse después de eliminar el más alto; no sirven como identidad global de auditoría. El catálogo depende de la API del proceso Vite en dev/preview; una copia estática de dist no ejecuta ese plugin.

## Extensiones razonables

Prioridades, búsqueda compartible en URL o migración de versión pueden ampliar el contrato. Cada extensión requiere reglas y casos nuevos. Una autenticación real, sincronización o backend introduciría otra arquitectura; no la anuncies por haber agregado un botón o una variable VITE_.

[Revisar checklist](CHECKLIST.md) · [Revisar rúbrica](RUBRICA.md)

---

## Continuar el curso

- **Unidad anterior:** [Unidad 33: Taller integrador React](../unidad33-taller/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
Llegaste al final. Revisa el proyecto y su lista de comprobación.
