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

## Modelo ejecutable de migración

El módulo [prioridad.js](ejemplo/prioridad.js) resuelve validación v2, migración desde v1, serialización, cambio por id y filtrado de prioridad. Las [pruebas](../tests/prioridad.test.js) cubren conservación de identidad/estado, títulos iguales, entrada corrupta y rechazo íntegro.

```js
import {
  migrarV1, cambiarPrioridad, serializarV2, deserializarV2,
} from "./ejemplo/prioridad.js";

const anterior = JSON.stringify({
  version: 1,
  tareas: [{ id: 7, titulo: "Leer", completada: false }],
});
const migradas = migrarV1(anterior);
const nuevas = cambiarPrioridad(migradas, 7, "alta");
const recuperadas = deserializarV2(serializarV2(nuevas));
// recuperadas[0]: id 7, Leer, false, prioridad alta.
```

Este fragmento se ejecuta como módulo desde unidad33-taller; para una consola de Node utiliza las mismas importaciones relativas a esa carpeta. No toca Storage. El proyecto visual base sigue usando v1: conectar prioridad exige adaptar sus operaciones y controles, además de elegir una clave v2. No mezcles serializadores v1/v2 ni sobrescribas el documento original antes de validar la migración completa.

## Comparación

Una estructura diferente puede ser válida si conserva pureza, identidad, acceso y recuperación de fallos. Ejecuta [las comprobaciones](../docs/VERIFICACION.md) y agrega un caso de prioridad inválida y otro de lectura v1. No cambies todo el almacenamiento real para ensayar una migración: utiliza datos ficticios en una sesión de prueba.

## Resolución concreta de la práctica

Para la prioridad: usa un sobre version:2, conserva id/titulo/completada y exige prioridad entre baja/media/alta. Al migrar v1 valida primero con deserializar y asigna media a cada tarea. Serializar y deserializar v2 deben validar la propiedad nueva; las operaciones de edición deben conservarla. No utilices el serializador v1 suponiendo que retendrá campos adicionales. Agrega casos de migración y rechazo antes de conectar el selector y el filtro. Esta extensión requiere cambios coordinados; el proyecto base continúa en v1.

[Seguir el recorrido del código](DESARROLLO.md) · [Volver a la práctica](PRACTICA.md)

---

## Continuar el curso

- **Unidad anterior:** [Unidad 32: Build y publicación de una SPA](../unidad32-build/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 34: Proyecto final](../unidad34-proyecto-final/README.md)
