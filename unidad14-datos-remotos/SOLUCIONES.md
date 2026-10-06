# Solución razonada: Datos ligados a una dependencia

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md)

## Resultado de la referencia

normal produce success; vacio produce empty; un fallo informa su categoría.

La implementación completa está en [App.jsx](ejemplo/App.jsx). Si importa un componente de features, revisa también sus reglas, hook/reducer y efectos: la interfaz de la unidad no duplica esa lógica.

## Desarrollo y explicación de la actividad

La respuesta de lento no se acepta tras su cleanup. normal termina con dos recursos; 500 se clasifica como http y el JSON no analizable como json. El cuerpo se valida después de parsear, porque HTTP 200 y JSON válido no garantizan la estructura correcta. El efecto expresa relación con escenario; una carga por botón puede ubicarse en un handler, como muestra la siguiente unidad.

## Contraste que debes poder reproducir

normal; vacio; 500; JSON inválido; cambio rápido lento a normal.

Compara la entrada y el resultado en la referencia antes de evaluar una variante. Identifica la primera operación que cambia el significado: el punto de conversión, una identidad, una dependencia, una transición o un efecto según el tema. Un mensaje de error distinto puede ser aceptable; presentar un fallo como éxito o perder la identidad de los datos no lo es.

## Comprobación y límites

Conserva casos de entrada y acciones observables. Las [pruebas del curso](../docs/VERIFICACION.md) verifican contratos concretos y rutas; no demuestran todos los programas que puedas construir a partir de ellos. Si agregas una regla nueva, incorpora un caso que falle al romperla, sin convertir cada línea de implementación en una aserción equivalente.

Para los componentes con controles, compara teclado, etiqueta y foco después de cambiar estado. Para efectos o red, comprueba además limpieza y resultados que lleguen tarde. Para ejemplos puros, revisa que la entrada no se modifique accidentalmente. Justifica qué comprobación aplica al tema en lugar de repetir una lista de herramientas sin evidencia.

[Volver a la práctica](PRACTICA.md)

---

## Continuar el curso

- **Unidad anterior:** [Unidad 13: useEffect, dependencias y cleanup](../unidad13-useeffect/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 15: Loading, error, empty y datos remotos](../unidad15-estados-remotos/README.md)
