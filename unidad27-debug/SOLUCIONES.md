# Solución razonada: Diagnóstico por evidencia

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md)

## Resultado de la referencia

12 produce resultado 15 y se identifica texto como string.

La implementación completa está en [App.jsx](ejemplo/App.jsx). Si importa un componente de features, revisa también sus reglas, hook/reducer y efectos: la interfaz de la unidad no duplica esa lógica.

## Desarrollo y explicación de la actividad

texto+3 concatena y produce "123". El cálculo correcto usa numero+3 y rechaza ausencia/no finito. Esta regla acepta notaciones que Number pueda convertir; no es la misma regla de dígitos de analizarCantidad. La prueba de regresión debe comprobar tipo y valor, no solo apariencia de un texto. Una ruta fallida o JSX inválido se investiga en una etapa anterior.

## Resolución concreta de la práctica

"12" produce 15 con la regla válida y "123" con concatenación. 12abc produce conversión no finita y resultado null; Infinity también se rechaza. Vacío y espacios no son entradas numéricas aceptadas. La comparación explícita con cadena vacía impide devolver el resultado de trim por cortocircuito. Para exigir estrictamente null se usa `texto.trim() !== "" && Number.isFinite(numero) ? numero + 3 : null`. Esa comparación booleana expresa el contrato con más precisión.

[Seguir el recorrido del código](DESARROLLO.md) · [Volver a la práctica](PRACTICA.md)

---

## Continuar el curso

- **Unidad anterior:** [Unidad 26: Errores y Error Boundaries](../unidad26-errores/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 28: Re-renderizados y rendimiento](../unidad28-rendimiento/README.md)
