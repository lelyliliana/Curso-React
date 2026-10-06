# Solución razonada: Persistencia y recuperación

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md)

## Resultado de la referencia

Las tareas válidas reaparecen al recargar el mismo origen.

La implementación completa está en [App.jsx](ejemplo/App.jsx). Si importa un componente de features, revisa también sus reglas, hook/reducer y efectos: la interfaz de la unidad no duplica esa lógica.

## Desarrollo y explicación de la actividad

revision comienza en 0 y el efecto retorna sin guardar. Tras agregar una tarea válida pasa a 1 y puede guardar la colección nueva. StrictMode puede invocar lecturas adicionales, pero son lecturas sin escritura. El catch de guardado informa fallo sin deshacer la sesión. No uses localStorage.clear ni prometas un respaldo remoto que no existe.

## Contraste que debes poder reproducir

Datos válidos; corruptos; lectura sin escritura; cuota; origen distinto.

Compara la entrada y el resultado en la referencia antes de evaluar una variante. Identifica la primera operación que cambia el significado: el punto de conversión, una identidad, una dependencia, una transición o un efecto según el tema. Un mensaje de error distinto puede ser aceptable; presentar un fallo como éxito o perder la identidad de los datos no lo es.

## Comprobación y límites

Conserva casos de entrada y acciones observables. Las [pruebas del curso](../docs/VERIFICACION.md) verifican contratos concretos y rutas; no demuestran todos los programas que puedas construir a partir de ellos. Si agregas una regla nueva, incorpora un caso que falle al romperla, sin convertir cada línea de implementación en una aserción equivalente.

Para los componentes con controles, compara teclado, etiqueta y foco después de cambiar estado. Para efectos o red, comprueba además limpieza y resultados que lleguen tarde. Para ejemplos puros, revisa que la entrada no se modifique accidentalmente. Justifica qué comprobación aplica al tema en lugar de repetir una lista de herramientas sin evidencia.

[Volver a la práctica](PRACTICA.md)

---

## Continuar el curso

- **Unidad anterior:** [Unidad 21: Diseñar el estado de una aplicación](../unidad21-estado-app/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 23: Accesibilidad en React](../unidad23-accesibilidad/README.md)
