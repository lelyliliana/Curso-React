# Solución razonada: Identidad al reordenar

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md)

## Resultado de la referencia

El alias editado de Ana sigue junto a Ana después de invertir el orden.

La implementación completa está en [App.jsx](ejemplo/App.jsx). Si importa un componente de features, revisa también sus reglas, hook/reducer y efectos: la interfaz de la unidad no duplica esa lógica.

## Desarrollo y explicación de la actividad

Con id, cada input conserva su identidad. Con índice, React conserva el nodo de la posición aunque ahora represente otra persona; un valor no controlado puede quedar junto al nombre equivocado. La explicación no es que reverse sea asíncrono ni que necesites forzar otro render. La reparación es usar la identidad del registro y preservar correctamente los datos del estado.

## Contraste que debes poder reproducir

Alias distintos; una inversión; dos inversiones; id vs índice.

Compara la entrada y el resultado en la referencia antes de evaluar una variante. Identifica la primera operación que cambia el significado: el punto de conversión, una identidad, una dependencia, una transición o un efecto según el tema. Un mensaje de error distinto puede ser aceptable; presentar un fallo como éxito o perder la identidad de los datos no lo es.

## Comprobación y límites

Conserva casos de entrada y acciones observables. Las [pruebas del curso](../docs/VERIFICACION.md) verifican contratos concretos y rutas; no demuestran todos los programas que puedas construir a partir de ellos. Si agregas una regla nueva, incorpora un caso que falle al romperla, sin convertir cada línea de implementación en una aserción equivalente.

Para los componentes con controles, compara teclado, etiqueta y foco después de cambiar estado. Para efectos o red, comprueba además limpieza y resultados que lleguen tarde. Para ejemplos puros, revisa que la entrada no se modifique accidentalmente. Justifica qué comprobación aplica al tema en lugar de repetir una lista de herramientas sin evidencia.

[Volver a la práctica](PRACTICA.md)

---

## Continuar el curso

- **Unidad anterior:** [Unidad 08: Renderizado condicional](../unidad08-condicional/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 10: Formularios en React](../unidad10-formularios/README.md)
