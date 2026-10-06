# Práctica: Condiciones y estados excluyentes

[Lección](README.md) · [Índice](../README.md) · [Solución](SOLUCIONES.md)

## Objetivo observable

La selección cambia mensajes y solo success muestra la lista.

## Actividad

Añade un caso denied con un mensaje explícito y sin lista. Explica por qué una colección vacía no debe usar ese mismo mensaje ni el de error.

## Procedimiento

1. Prepara la copia del curso con [ENTORNO.md](../docs/ENTORNO.md) y abre el laboratorio 08.
2. Comprueba primero el resultado de la referencia. Identifica imports, valores de entrada, estado, efectos y controles que intervengan en el tema.
3. Registra una predicción para cada cambio antes de ejecutarlo. Conserva el componente original o usa una copia de trabajo para poder regresar.
4. Implementa la extensión solicitada sin trasladar reglas de datos a una manipulación manual del DOM ni ocultar fallos en un catch vacío.
5. Ejecuta casos normales, límites y fallos pertinentes. Usa teclado cuando existan controles y compara el resultado con el contrato.
6. Describe una diferencia entre la referencia y la modificación, o un fallo reproducido y corregido. Restaura errores deliberados antes de avanzar.

## Casos mínimos

idle; loading; success; empty; error; denied simulado.

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

- **Unidad anterior:** [Unidad 07: Estado con useState](../unidad07-usestate/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 09: Listas, keys e identidad](../unidad09-listas-keys/README.md)
