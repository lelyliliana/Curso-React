# Revisar el proyecto como una aplicación entregable

[Unidad](README.md) · [Práctica](PRACTICA.md) · [Solución](SOLUCIONES.md)

## 1. Ubica la implementación

Abre [ejemplos/app-referencia/README.md](../ejemplos/app-referencia/README.md) desde la copia completa del curso. Abre el proyecto en http://127.0.0.1:5173/#/proyecto y su vista de catálogo.

## 2. Sigue los datos y las decisiones

La referencia tiene dos vistas: tareas y catálogo. Es una aplicación cliente con guardado local falible y recursos de práctica. Antes de evaluarla, define qué constituye éxito en cada flujo y qué dato debe sobrevivir recarga. No agregues cuentas o un backend solo para aumentar el número de tecnologías.

El mapa de estado debe asignar dueño a colección/revisión, campos de edición, filtros, URL y estado remoto. Los valores derivados no reciben otra memoria sin una necesidad concreta. Las reglas deben seguir funcionando con títulos iguales y vistas filtradas; la identidad se verifica por id, no por texto.

La entrega requiere evidencia de fallos: cargar JSON inválido no escribe al montar; una acción posterior puede reemplazarlo; un fallo de escritura mantiene memoria e informa. Una respuesta remota vieja no reemplaza la vigente. Un HTTP fallido no se presenta como vacío. Cada afirmación debe relacionarse con un caso reproducible.

El README de entrega debe explicar instalación desde lockfile, comandos, rutas y límites de publicación. La ejecución en desarrollo no sustituye un build servido desde su destino. La rúbrica evalúa decisiones y resultados; añadir hooks sin necesidad no mejora por sí mismo la calidad.

## 3. Contrasta una modificación

Haz un recorrido de aceptación: crear dos títulos iguales, editar uno, cancelar otro borrador, completar desde un filtro, recargar, forzar fallo de guardado y recorrer los escenarios de catálogo. Abre un detalle mediante URL directa y comprueba navegación por teclado. Guarda la entrada y el resultado observado de cada caso.

## 4. Resuelve y explica

Completa la [práctica](PRACTICA.md) y contrasta después la [solución razonada](SOLUCIONES.md). Anota la entrada o acción, el resultado que predijiste y el observado; utiliza la diferencia para explicar la decisión del tema.
