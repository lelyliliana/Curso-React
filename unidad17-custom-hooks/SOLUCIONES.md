# Solución razonada: Extraer una API pequeña

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md)

## Resultado de la referencia

A empieza en 0 y B en 10; sumar A no cambia B.

La implementación completa está en [App.jsx](ejemplo/App.jsx). Si importa un componente de features, revisa también sus reglas, hook/reducer y efectos: la interfaz de la unidad no duplica esa lógica.

## Desarrollo y explicación de la actividad

restar puede usar setCantidad(n=>Math.max(0,n-1)). Documenta si reiniciar usa el inicio actual o el valor de montaje: el hook de referencia captura la prop de su render actual en la acción reiniciar. No añadas un efecto solo para copiar inicio a estado sin decidir antes esa semántica. La reutilización conserva los mismos límites de hooks y efectos.

## Contraste que debes poder reproducir

Tres instancias; 0; reiniciar; cambio de prop; estado independiente.

Compara la entrada y el resultado en la referencia antes de evaluar una variante. Identifica la primera operación que cambia el significado: el punto de conversión, una identidad, una dependencia, una transición o un efecto según el tema. Un mensaje de error distinto puede ser aceptable; presentar un fallo como éxito o perder la identidad de los datos no lo es.

## Comprobación y límites

Conserva casos de entrada y acciones observables. Las [pruebas del curso](../docs/VERIFICACION.md) verifican contratos concretos y rutas; no demuestran todos los programas que puedas construir a partir de ellos. Si agregas una regla nueva, incorpora un caso que falle al romperla, sin convertir cada línea de implementación en una aserción equivalente.

Para los componentes con controles, compara teclado, etiqueta y foco después de cambiar estado. Para efectos o red, comprueba además limpieza y resultados que lleguen tarde. Para ejemplos puros, revisa que la entrada no se modifique accidentalmente. Justifica qué comprobación aplica al tema en lugar de repetir una lista de herramientas sin evidencia.

[Volver a la práctica](PRACTICA.md)

---

## Continuar el curso

- **Unidad anterior:** [Unidad 16: Cancelación, cleanup y carreras de red](../unidad16-cancelacion/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 18: Routing y URL como estado](../unidad18-routing/README.md)
