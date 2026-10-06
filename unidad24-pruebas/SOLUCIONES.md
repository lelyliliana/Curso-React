# Solución razonada: Pruebas desde controles y resultados

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md)

## Resultado de la referencia

El mismo formulario se puede usar manualmente y comprobar con Vitest.

La implementación completa está en [App.jsx](ejemplo/App.jsx). Si importa un componente de features, revisa también sus reglas, hook/reducer y efectos: la interfaz de la unidad no duplica esa lógica.

## Desarrollo y explicación de la actividad

La suite real contiene el caso de espacios y Ana normalizada. Para dos instancias, renderiza dos Formularios y usa getAllByLabelText; comprueba que cada input tiene otro id. Usa un callback vi.fn por instancia y envía solo uno. No sustituyas todos los hijos por mocks ni asserts de estados internos: el límite a sustituir es el callback o un recurso externo.

## Contraste que debes poder reproducir

Nombre corto; normalizado; dos instancias; callback; foco tras error.

Compara la entrada y el resultado en la referencia antes de evaluar una variante. Identifica la primera operación que cambia el significado: el punto de conversión, una identidad, una dependencia, una transición o un efecto según el tema. Un mensaje de error distinto puede ser aceptable; presentar un fallo como éxito o perder la identidad de los datos no lo es.

## Comprobación y límites

Conserva casos de entrada y acciones observables. Las [pruebas del curso](../docs/VERIFICACION.md) verifican contratos concretos y rutas; no demuestran todos los programas que puedas construir a partir de ellos. Si agregas una regla nueva, incorpora un caso que falle al romperla, sin convertir cada línea de implementación en una aserción equivalente.

Para los componentes con controles, compara teclado, etiqueta y foco después de cambiar estado. Para efectos o red, comprueba además limpieza y resultados que lleguen tarde. Para ejemplos puros, revisa que la entrada no se modifique accidentalmente. Justifica qué comprobación aplica al tema en lugar de repetir una lista de herramientas sin evidencia.

[Volver a la práctica](PRACTICA.md)

---

## Continuar el curso

- **Unidad anterior:** [Unidad 23: Accesibilidad en React](../unidad23-accesibilidad/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 25: Pruebas de flujos asíncronos](../unidad25-pruebas-flujos/README.md)
