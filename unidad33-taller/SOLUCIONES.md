# Solución razonada del taller

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md)

## Contrato y decisiones

El [dominio](../features/tareas/dominio.js) valida y transforma sin React. El [reducer](../features/tareas/reducer.js) incorpora las operaciones y aumenta revision solo ante cambios válidos. Si una entrada falla, conserva tareas y revisión y agrega un mensaje de error.

[Tareas](../features/tareas/Tareas.jsx) mantiene borrador y filtros locales. La colección visible se deriva con filtrarTareas; la acción usa id, no índice. El submit valida título, despacha una intención y restaura el campo/foco. Cancelar abandona el borrador. La lectura inicial admite únicamente una colección completa compatible; el efecto retorna sin guardar mientras revision sea 0.

## Persistencia

El adaptador usa una clave propia y JSON de versión 1. El componente informa errores de lectura/escritura. Una acción nueva sí puede reemplazar contenido corrupto: la referencia no recupera registros parciales ni hace copia de seguridad. Es una sesión educativa del navegador, no un sistema de gestión personal con garantías de durabilidad.

## Red

El cliente valida status, JSON y estructura. useCatalogo conserva identidad de solicitud y condición de componente activo; abort reduce trabajo, pero la comprobación de identidad evita que llegue un resultado viejo a la UI. Los clientes controlados de las pruebas verifican también una operación que no atiende abort.

## Extensión de prioridad

Para añadir prioridad, amplía el registro admitido y sus validadores, no solo el JSX. Puedes crear una versión 2 que migre cada registro v1 a prioridad media, o usar otra clave y comunicar que no carga datos anteriores. Elige una política y prueba que se aplique a toda la colección sin aceptar registros inválidos parcialmente.

La vista se calcula combinando estado, búsqueda y prioridad. Completar sigue utilizando id. serializar y deserializar deben acordar versión y contrato; el mapper que descarta campos desconocidos actualmente descartaría prioridad si no se actualiza.

## Comparación

Una estructura diferente puede ser válida si conserva pureza, identidad, acceso y recuperación de fallos. Ejecuta [las comprobaciones](../docs/VERIFICACION.md) y agrega un caso de prioridad inválida y otro de lectura v1. No cambies todo el almacenamiento real para ensayar una migración: utiliza datos ficticios en una sesión de prueba.

---

## Continuar el curso

- **Unidad anterior:** [Unidad 32: Build y publicación de una SPA](../unidad32-build/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 34: Proyecto final](../unidad34-proyecto-final/README.md)
