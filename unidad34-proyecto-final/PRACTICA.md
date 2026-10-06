# Proyecto final: aplicación de estudio con React

[Lección](README.md) · [Índice](../README.md) · [Referencia](../ejemplos/app-referencia/README.md)

## Propósito y alcance

Construye una aplicación cliente con dos vistas navegables: tareas de estudio y catálogo. Usa datos ficticios. El catálogo consulta la API controlada del curso; las tareas se guardan localmente, cuando el navegador lo permite.

El proyecto no requiere cuentas, pagos, datos personales, backend de tareas ni sincronización remota. Otra persona debe poder instalarlo desde lockfile, ejecutarlo, probarlo y comprender sus límites.

## Funciones requeridas

| Capacidad | Contrato |
|---|---|
| Agregar | Título normalizado de 1 a 80 unidades UTF-16; máximo 200 tareas |
| Editar | Cambiar título del id seleccionado, conservando su estado |
| Cancelar edición | Descartar borrador sin cambiar la colección |
| Completar/pendiente | Alternar estado por id |
| Eliminar | Retirar el id elegido, incluso en vista filtrada |
| Filtrar | Todas/pendientes/completadas, combinado con búsqueda |
| Persistir | Clave propia, JSON versionado, validación íntegra |
| Carga inválida | Aviso sin sobrescribir durante montaje |
| Fallo de escritura | Mantener sesión e informar que no persistió |
| Catálogo | idle/loading/success/empty/error y categorías de fallo |
| Cancelar red | Acción visible, sin aceptar resultados obsoletos |
| Navegar | Enlaces, rutas directas, título y foco pertinentes |

Títulos iguales son admisibles. Los id son únicos entre tareas activas y estables mientras existen; declara si se pueden reutilizar tras eliminación. No anuncies un historial de auditoría que no implementaste.

## Etapas de construcción

1. Dibuja árbol de componentes y asigna propietario a colección, campos, filtros y datos remotos.
2. Define y prueba reglas puras con límites, identidad y conservación de entradas.
3. Implementa transiciones mediante reducer o un diseño equivalente justificable.
4. Construye formulario y lista con labels, botones nativos, keys y acciones por id.
5. Añade lectura/guardado y decide política de corrupción y migración.
6. Integra cliente, estado remoto, cancelación y solicitud vigente.
7. Implementa rutas y acceso directo, conservando navegación semántica.
8. Verifica comportamientos, reflow, teclado y mensajes; diagnostica un fallo reproducible.
9. Construye dist y documenta qué funciones dependen del proceso de API.

## Evidencia de aceptación

- Caso normal y límite de título, más rechazo de espacios.
- Títulos duplicados con id diferentes.
- Edición y cancelación; eliminación desde una lista filtrada.
- Datos recuperados tras recarga del mismo origen.
- JSON corrupto conservado durante carga; escritura rechazada con memoria mantenida.
- Texto de marcado visible sin crear elementos.
- Vacío remoto y errores HTTP/JSON/esquema, tiempo y cancelación.
- Dos cargas resueltas en orden inverso sin reemplazar la más reciente.
- Ruta directa y recarga de ambas vistas.
- Teclado, foco, nombres, ancho 320 px y texto duplicado.

## Pruebas y publicación

Ejecuta npm run check, npm test y npm run build por separado. Amplía la suite con una regla que hayas añadido y que detecte una regresión. Las pruebas de UI deben utilizar comportamiento observable, no setters internos.

Si publicas en hosting estático, sirve dist con rutas/recursos apropiados. El plugin de API no queda dentro de esa carpeta: la vista de tareas funciona localmente, pero el catálogo requiere un endpoint disponible o una alternativa claramente descrita. No subas node_modules ni secretos de configuración.

## Entrega

Repositorio, README de ejecución, mapa de estado/dependencias, pruebas, tabla de aceptación, evidencia de acceso y bitácora de diagnóstico. Una URL publicada se incluye cuando realmente exista. Utiliza [PLANTILLA_PROYECTO.md](PLANTILLA_PROYECTO.md), [RUBRICA.md](RUBRICA.md) y [CHECKLIST.md](CHECKLIST.md).

---

## Continuar el curso

- **Unidad anterior:** [Unidad 33: Taller integrador React](../unidad33-taller/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
Llegaste al final. Revisa el proyecto y su lista de comprobación.
