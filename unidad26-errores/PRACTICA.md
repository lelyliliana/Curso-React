# Práctica: Errores de render y de acciones

[Lección](README.md) · [Índice](../README.md) · [Solución](SOLUCIONES.md)

## Objetivo observable

El widget falla y se recupera; el contenido externo permanece.

## Actividad

Activa ambos fallos y documenta dónde se capturan. Cambia el widget para fallar siempre y explica por qué un reintento sin corregir la causa no basta.

## Procedimiento

1. Prepara la copia del curso con [ENTORNO.md](../docs/ENTORNO.md) y abre el laboratorio 26.
2. Comprueba primero el resultado de la referencia. Identifica imports, valores de entrada, estado, efectos y controles que intervengan en el tema.
3. Registra una predicción para cada cambio antes de ejecutarlo. Conserva el componente original o usa una copia de trabajo para poder regresar.
4. Implementa la extensión solicitada sin trasladar reglas de datos a una manipulación manual del DOM ni ocultar fallos en un catch vacío.
5. Ejecuta casos normales, límites y fallos pertinentes. Usa teclado cuando existan controles y compara el resultado con el contrato.
6. Describe una diferencia entre la referencia y la modificación, o un fallo reproducido y corregido. Restaura errores deliberados antes de avanzar.

## Casos mínimos

Render fallido; encabezado preservado; reintento; evento manejado; causa persistente.

| Caso | Entrada o acción | Predicción | Observado | Explicación |
|---|---|---|---|---|
| Referencia | | | | |
| Extensión | | | | |
| Límite | | | | |
| Fallo o contraste | | | | |

## Criterios de aceptación

- La interacción cumple el resultado solicitado y permite repetir la evidencia.
- El propietario del estado está identificado y los datos derivados no se duplican sin motivo.
- Los recursos externos que se creen tienen una estrategia de limpieza cuando aplica.
- Las entradas inválidas o los fallos se distinguen de un resultado válido.
- Los nombres, etiquetas y foco permiten comprender y usar los controles.
- No quedan importaciones rotas, excepciones inesperadas ni variantes defectuosas activas.

No basta con escribir funciona: conserva entrada, salida y decisión que la explica. Una alternativa es válida cuando respeta el mismo contrato; una modificación de contrato requiere explicitar qué casos cambian y por qué.

[Comparar la solución razonada](SOLUCIONES.md)

---

## Continuar el curso

- **Unidad anterior:** [Unidad 25: Pruebas de flujos asíncronos](../unidad25-pruebas-flujos/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 27: React DevTools y depuración](../unidad27-debug/README.md)
