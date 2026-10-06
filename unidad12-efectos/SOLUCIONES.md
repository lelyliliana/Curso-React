# Solución razonada: Render, evento y efecto

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md)

## Resultado de la referencia

La búsqueda React deja un recurso y el título indica 1 recursos.

La implementación completa está en [App.jsx](ejemplo/App.jsx). Si importa un componente de features, revisa también sus reglas, hook/reducer y efectos: la interfaz de la unidad no duplica esa lógica.

## Desarrollo y explicación de la actividad

La longitud se calcula durante render. Si la cantidad no cambia, el efecto del título no necesita ejecutarse otra vez porque su salida seguiría siendo la misma. Al desmontar restaura el valor que capturó. El contenedor del curso también gestiona navegación y foco; no copies sus ajustes de navegación como parte del algoritmo de filtrado.

## Contraste que debes poder reproducir

Tres recursos; uno; ninguno; cantidad sin cambiar; salir y cleanup.

Compara la entrada y el resultado en la referencia antes de evaluar una variante. Identifica la primera operación que cambia el significado: el punto de conversión, una identidad, una dependencia, una transición o un efecto según el tema. Un mensaje de error distinto puede ser aceptable; presentar un fallo como éxito o perder la identidad de los datos no lo es.

## Comprobación y límites

Conserva casos de entrada y acciones observables. Las [pruebas del curso](../docs/VERIFICACION.md) verifican contratos concretos y rutas; no demuestran todos los programas que puedas construir a partir de ellos. Si agregas una regla nueva, incorpora un caso que falle al romperla, sin convertir cada línea de implementación en una aserción equivalente.

Para los componentes con controles, compara teclado, etiqueta y foco después de cambiar estado. Para efectos o red, comprueba además limpieza y resultados que lleguen tarde. Para ejemplos puros, revisa que la entrada no se modifique accidentalmente. Justifica qué comprobación aplica al tema en lugar de repetir una lista de herramientas sin evidencia.

[Volver a la práctica](PRACTICA.md)

---

## Continuar el curso

- **Unidad anterior:** [Unidad 11: Estado derivado y lifting state up](../unidad11-estado-compartido/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 13: useEffect, dependencias y cleanup](../unidad13-useeffect/README.md)
