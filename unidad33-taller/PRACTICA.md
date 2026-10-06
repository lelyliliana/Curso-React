# Taller: gestor de estudio y catálogo

[Lección](README.md) · [Índice](../README.md)

## Construir en seis etapas

1. Define dominio y prueba límites antes de integrar React.
2. Diseña reducer y clasifica estado local, persistido, remoto y derivado.
3. Implementa formulario, lista, edición, cancelación y filtro por identidad.
4. Añade almacenamiento versionado con lectura inválida y fallo de escritura.
5. Integra catálogo con respuestas controladas y rutas compartibles.
6. Verifica flujos y documenta dependencias, acceso y límites.

Puedes construir una variante del proyecto en una copia del curso, conservando su manifiesto y lockfile. Mantén datos ficticios y no añadas un backend que no necesite el enunciado.

## Casos de aceptación

| Flujo | Evidencia esperada |
|---|---|
| Título vacío o solo espacios | No se crea tarea; error corregible |
| Títulos iguales | Dos id distintos y acciones independientes |
| Editar y cancelar | El dato original permanece |
| Completar en filtro | Cambia el id elegido, no otra posición |
| Recargar | Recupera datos válidos del mismo origen |
| JSON corrupto | Informa error sin escribir durante carga |
| Escritura rechazada | Conserva memoria e informa que no persistió |
| Texto con marcado | No crea nodos de marcado |
| Colección remota vacía | Estado empty, no falso error |
| Error HTTP/JSON/esquema | Categoría pertinente |
| Respuesta vieja | No reemplaza la nueva |
| Ruta directa | Abre vista y conserva semántica de navegación |
| Teclado/reflow | Controles disponibles, foco válido y contenido visible |

## Extensión

Añade una prioridad baja/media/alta a las tareas. Define default y validación, actualiza serialización y decide una nueva versión o migración explícita de datos. Agrega un filtro derivado de prioridad y conserva id como identidad.

No basta con añadir un select: prueba lectura de datos anteriores, prioridad inválida y filtro combinado. Explica la política de compatibilidad antes de modificar tu clave local; usa una sesión de prueba.

## Entregables

Código, README de ejecución, mapa de estado, tabla de aceptación, tests relevantes y diagnóstico de un fallo. Consulta la solución después de producir tu propia evidencia.

[Solución razonada](SOLUCIONES.md)

---

## Continuar el curso

- **Unidad anterior:** [Unidad 32: Build y publicación de una SPA](../unidad32-build/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 34: Proyecto final](../unidad34-proyecto-final/README.md)
