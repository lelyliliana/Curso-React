# Solución razonada: Clasificar el estado de aplicación

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md)

## Resultado de la referencia

Filtrar completadas muestra Practicar y conserva la colección de dos tareas.

La implementación completa está en [App.jsx](ejemplo/App.jsx). Si importa un componente de features, revisa también sus reglas, hook/reducer y efectos: la interfaz de la unidad no duplica esa lógica.

## Desarrollo y explicación de la actividad

La búsqueda local usa useState y se combina dentro de filter o filtrarTareas. La colección original sigue teniendo dos registros. Para compartir, useSearchParams puede ser la fuente; evita mantener además otra copia del mismo valor en estado sin un motivo. Completar una fila filtrada debe actuar por id, no por su posición en la vista.

## Resolución concreta de la práctica

La [solución completa](ejemplo/Solucion.jsx) guarda solo filtro y busqueda; visibles se calcula por las dos condiciones. Pra más pendientes produce 0 de 2; pra más completadas produce 1 de 2. Borrar búsqueda y elegir todas devuelve 2 de 2. Si la búsqueda fuese compartible, reemplaza su fuente por parámetros URL en vez de mantener URL y estado local sin una política de sincronización.

La [extensión resuelta completa](ejemplo/Solucion.jsx) se ejecuta en http://127.0.0.1:5173/#/solucion/21. Ábrela después de intentar la práctica; la referencia original sigue disponible en el enlace de regreso.

[Seguir el recorrido del código](DESARROLLO.md) · [Volver a la práctica](PRACTICA.md)

---

## Continuar el curso

- **Unidad anterior:** [Unidad 20: useReducer y transiciones de estado](../unidad20-usereducer/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 22: Persistencia local en React](../unidad22-persistencia/README.md)
