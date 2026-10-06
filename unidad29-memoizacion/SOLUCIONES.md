# Solución razonada: Memoización como optimización

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md)

## Resultado de la referencia

Filtrar y elegir cambia la salida; el contador no altera la selección.

La implementación completa está en [App.jsx](ejemplo/App.jsx). Si importa un componente de features, revisa también sus reglas, hook/reducer y efectos: la interfaz de la unidad no duplica esa lógica.

## Desarrollo y explicación de la actividad

Un array nuevo rompe igualdad referencial de props aunque contenga datos iguales. Estabilizarlo puede ayudar si evita trabajo costoso demostrado. En este ejemplo pequeño puede no aportar una mejora relevante. El callback utiliza un setter estable y no lee q, por lo que no captura una búsqueda antigua; si lo modificas para leer valores reactivos, revisa dependencias.

## Contraste que debes poder reproducir

Filtro; selección; contador ajeno; nueva referencia; comparación de perfil.

Compara la entrada y el resultado en la referencia antes de evaluar una variante. Identifica la primera operación que cambia el significado: el punto de conversión, una identidad, una dependencia, una transición o un efecto según el tema. Un mensaje de error distinto puede ser aceptable; presentar un fallo como éxito o perder la identidad de los datos no lo es.

## Comprobación y límites

Conserva casos de entrada y acciones observables. Las [pruebas del curso](../docs/VERIFICACION.md) verifican contratos concretos y rutas; no demuestran todos los programas que puedas construir a partir de ellos. Si agregas una regla nueva, incorpora un caso que falle al romperla, sin convertir cada línea de implementación en una aserción equivalente.

Para los componentes con controles, compara teclado, etiqueta y foco después de cambiar estado. Para efectos o red, comprueba además limpieza y resultados que lleguen tarde. Para ejemplos puros, revisa que la entrada no se modifique accidentalmente. Justifica qué comprobación aplica al tema en lugar de repetir una lista de herramientas sin evidencia.

[Volver a la práctica](PRACTICA.md)

---

## Continuar el curso

- **Unidad anterior:** [Unidad 28: Re-renderizados y rendimiento](../unidad28-rendimiento/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 30: Arquitectura por features](../unidad30-arquitectura/README.md)
