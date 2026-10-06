# Solución razonada: Reducer y acciones

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md)

## Resultado de la referencia

restar desde 0 mantiene 0; sumar y reiniciar cambian el número.

La implementación completa está en [App.jsx](ejemplo/App.jsx). Si importa un componente de features, revisa también sus reglas, hook/reducer y efectos: la interfaz de la unidad no duplica esa lógica.

## Desarrollo y explicación de la actividad

sumarDos devuelve cantidad+2. La entrada no se modifica y no se generan ids aleatorios dentro del reducer. Un tipo desconocido se rechaza en este ejemplo, mientras que el reducer de tareas convierte errores de dominio en estado informativo: son contratos explícitos diferentes. Mantén efectos fuera del cálculo para que StrictMode pueda comprobar pureza sin duplicar operaciones externas.

## Contraste que debes poder reproducir

0; sumar; sumarDos; reiniciar; acción desconocida; dos invocaciones iguales.

Compara la entrada y el resultado en la referencia antes de evaluar una variante. Identifica la primera operación que cambia el significado: el punto de conversión, una identidad, una dependencia, una transición o un efecto según el tema. Un mensaje de error distinto puede ser aceptable; presentar un fallo como éxito o perder la identidad de los datos no lo es.

## Comprobación y límites

Conserva casos de entrada y acciones observables. Las [pruebas del curso](../docs/VERIFICACION.md) verifican contratos concretos y rutas; no demuestran todos los programas que puedas construir a partir de ellos. Si agregas una regla nueva, incorpora un caso que falle al romperla, sin convertir cada línea de implementación en una aserción equivalente.

Para los componentes con controles, compara teclado, etiqueta y foco después de cambiar estado. Para efectos o red, comprueba además limpieza y resultados que lleguen tarde. Para ejemplos puros, revisa que la entrada no se modifique accidentalmente. Justifica qué comprobación aplica al tema en lugar de repetir una lista de herramientas sin evidencia.

[Volver a la práctica](PRACTICA.md)

---

## Continuar el curso

- **Unidad anterior:** [Unidad 19: Context](../unidad19-context/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 21: Diseñar el estado de una aplicación](../unidad21-estado-app/README.md)
