# Diagnosticar React con evidencia

[Índice](../README.md) · [Entorno](ENTORNO.md) · [Unidad 27](../unidad27-debug/README.md)

Reproduce un síntoma con una entrada y busca la primera etapa que incumple el resultado esperado. No añadas efectos, memo o nuevas dependencias al azar para que un panel deje de mostrar mensajes.

| Etapa | Evidencia | Pregunta que resuelve |
|---|---|---|
| Instalación | Versiones, salida npm ci y lockfile | ¿La herramienta puede ejecutarse con este Node? |
| Transformación | Error de Vite, archivo y posición | ¿JSX e imports se pueden analizar? |
| Recursos | Network | ¿Se obtuvo el módulo o llegó un 404/HTML inesperado? |
| Datos | Tipo, valor y contrato | ¿Hay una cadena donde se esperaba número? |
| Identidad | Key, posición y montaje | ¿Se conservó el estado de la fila correcta? |
| Reactividad | Propietario del estado y snapshot | ¿El handler está leyendo su render o una fuente duplicada? |
| Efecto | Setup, dependencias y cleanup | ¿Se retira el recurso anterior? |
| Red | Status, cuerpo, categoría y solicitud | ¿HTTP, parseo, esquema o respuesta obsoleta? |
| Persistencia | Origen, clave, lectura y escritura | ¿Falló el guardado o cambió el origen? |
| Acceso | Etiqueta, control, foco y anuncio | ¿La persona puede identificar y corregir la acción? |
| Rendimiento | Perfil y caso repetible | ¿Hay un costo medido o solo un render esperado? |

## Bitácora mínima

1. Síntoma: después de invertir el orden, un alias queda junto a otra persona.
2. Hipótesis: la key representa posición, no identidad del registro.
3. Evidencia: la variante con key índice mantiene el input de la posición mientras cambia el nombre mostrado.
4. Corrección: usar id estable y conservar la copia del array antes de reverse.
5. Regresión: editar alias, invertir dos veces y verificar que el alias permanece asociado a su persona.

React DevTools permite inspeccionar árbol, props y estado. Network y el debugger del navegador permiten investigar carga y ejecución. Un log de “render” no demuestra modificación de todo el DOM; una excepción deliberada de la unidad 26 no debe confundirse con un fallo inesperado de otra unidad.

Registra entrada, acción, resultado y explicación. Restaura las variantes defectuosas antes de continuar. Si aparece un fallo después de una actualización de dependencias, repite la instalación desde lockfile y los casos antes de cambiar el contrato.
