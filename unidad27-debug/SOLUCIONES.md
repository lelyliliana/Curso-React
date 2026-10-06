# Solución razonada: Diagnóstico por evidencia

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md)

## Resultado de la referencia

12 produce resultado 15 y se identifica texto como string.

La implementación completa está en [App.jsx](ejemplo/App.jsx). Si importa un componente de features, revisa también sus reglas, hook/reducer y efectos: la interfaz de la unidad no duplica esa lógica.

## Desarrollo y explicación de la actividad

texto+3 concatena y produce "123". El cálculo correcto usa numero+3 y rechaza ausencia/no finito. Esta regla acepta notaciones que Number pueda convertir; no es la misma regla de dígitos de analizarCantidad. La prueba de regresión debe comprobar tipo y valor, no solo apariencia de un texto. Una ruta fallida o JSX inválido se investiga en una etapa anterior.

## Contraste que debes poder reproducir

12; concatenación; vacío; sufijo; Infinity; tipo y valor.

Compara la entrada y el resultado en la referencia antes de evaluar una variante. Identifica la primera operación que cambia el significado: el punto de conversión, una identidad, una dependencia, una transición o un efecto según el tema. Un mensaje de error distinto puede ser aceptable; presentar un fallo como éxito o perder la identidad de los datos no lo es.

## Comprobación y límites

Conserva casos de entrada y acciones observables. Las [pruebas del curso](../docs/VERIFICACION.md) verifican contratos concretos y rutas; no demuestran todos los programas que puedas construir a partir de ellos. Si agregas una regla nueva, incorpora un caso que falle al romperla, sin convertir cada línea de implementación en una aserción equivalente.

Para los componentes con controles, compara teclado, etiqueta y foco después de cambiar estado. Para efectos o red, comprueba además limpieza y resultados que lleguen tarde. Para ejemplos puros, revisa que la entrada no se modifique accidentalmente. Justifica qué comprobación aplica al tema en lugar de repetir una lista de herramientas sin evidencia.

[Volver a la práctica](PRACTICA.md)

---

## Continuar el curso

- **Unidad anterior:** [Unidad 26: Errores y Error Boundaries](../unidad26-errores/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 28: Re-renderizados y rendimiento](../unidad28-rendimiento/README.md)
