# Plantilla de documentación del proyecto

[Enunciado](PRACTICA.md) · [Rúbrica](RUBRICA.md) · [Índice](../README.md)

Completa las secciones con hechos de tu aplicación. Retira una afirmación que todavía no puedas demostrar.

## Problema y alcance

Describe usuario, necesidad, funciones incluidas y límites. Identifica qué datos son ficticios y qué capacidades no se implementaron.

## Ejecutar

Indica Node compatible, instalación desde lockfile, comandos de dev/test/build y URLs reales. Explica origen y fuente de los datos. Otra persona debe poder repetirlo sin una configuración privada tuya.

## Estado y dependencias

| Dato | Propietario | Duración | Fuente | ¿Derivado? |
|---|---|---|---|---|
| Colección | | | | |
| Borrador | | | | |
| Filtros | | | | |
| Datos remotos | | | | |

Describe dependencias del dominio, reducer, almacenamiento, cliente, hook e interfaz. Justifica efectos y sus limpiezas.

## Contratos

Registra reglas, límites, identidad, versiones persistidas y categorías de fallo. Explica política de título duplicado, id reutilizado, dato corrupto y guardado fallido.

## Aceptación y pruebas

| Caso | Condición | Esperado | Observado | Evidencia |
|---|---|---|---|---|
| Normal | | | | |
| Límite | | | | |
| Fallo | | | | |
| Respuesta vieja | | | | |
| Accesibilidad | | | | |

## Diagnóstico

Síntoma → hipótesis → evidencia → corrección → regresión. Describe un caso concreto, no solo el mensaje funciona.

## Publicación y limitaciones

Indica URL cuando exista, estrategia de rutas y disponibilidad real de la API. Explica qué queda en dist y qué requiere proceso de servidor. Documenta memoria/Storage, ausencia de respaldo remoto y compatibilidad ensayada.
