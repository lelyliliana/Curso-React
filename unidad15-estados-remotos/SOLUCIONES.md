# Solución razonada: Estados de un flujo remoto

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md)

## Resultado de la referencia

Los escenarios producen datos, vacío o una categoría visible de fallo.

La implementación completa está en [App.jsx](ejemplo/App.jsx). Si importa un componente de features, revisa también sus reglas, hook/reducer y efectos: la interfaz de la unidad no duplica esa lógica.

## Desarrollo y explicación de la actividad

Con vacio aparece No hay resultados y []: no se trata de un fallo de conexión. HTTP 404 y 500 llegan como Response y requieren comprobar ok. Tras cualquier resultado, busy pasa a false y Cancelar se deshabilita. Los mensajes no muestran una pila de ejecución al estudiante; el diagnóstico técnico se hace en las herramientas del navegador.

## Contraste que debes poder reproducir

idle; loading; success; empty; http; json; esquema; timeout.

Compara la entrada y el resultado en la referencia antes de evaluar una variante. Identifica la primera operación que cambia el significado: el punto de conversión, una identidad, una dependencia, una transición o un efecto según el tema. Un mensaje de error distinto puede ser aceptable; presentar un fallo como éxito o perder la identidad de los datos no lo es.

## Comprobación y límites

Conserva casos de entrada y acciones observables. Las [pruebas del curso](../docs/VERIFICACION.md) verifican contratos concretos y rutas; no demuestran todos los programas que puedas construir a partir de ellos. Si agregas una regla nueva, incorpora un caso que falle al romperla, sin convertir cada línea de implementación en una aserción equivalente.

Para los componentes con controles, compara teclado, etiqueta y foco después de cambiar estado. Para efectos o red, comprueba además limpieza y resultados que lleguen tarde. Para ejemplos puros, revisa que la entrada no se modifique accidentalmente. Justifica qué comprobación aplica al tema en lugar de repetir una lista de herramientas sin evidencia.

[Volver a la práctica](PRACTICA.md)

---

## Continuar el curso

- **Unidad anterior:** [Unidad 14: Datos remotos en React](../unidad14-datos-remotos/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 16: Cancelación, cleanup y carreras de red](../unidad16-cancelacion/README.md)
