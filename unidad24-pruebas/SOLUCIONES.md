# Solución razonada: Pruebas desde controles y resultados

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md)

## Resultado de la referencia

El mismo formulario se puede usar manualmente y comprobar con Vitest.

La implementación completa está en [App.jsx](ejemplo/App.jsx). Si importa un componente de features, revisa también sus reglas, hook/reducer y efectos: la interfaz de la unidad no duplica esa lógica.

## Desarrollo y explicación de la actividad

La suite real contiene el caso de espacios y Ana normalizada. Para dos instancias, renderiza dos Formularios y usa getAllByLabelText; comprueba que cada input tiene otro id. Usa un callback vi.fn por instancia y envía solo uno. No sustituyas todos los hijos por mocks ni asserts de estados internos: el límite a sustituir es el callback o un recurso externo.

## Resolución concreta de la práctica

La comprobación nueva del curso monta la extensión de dos formularios y busca cada región con within. Envía A en el primero y espera el error; el texto del padre permanece Sin guardar. Luego introduce " Ana " y espera Ana. El segundo conserva su estado independiente y ambos inputs tienen id distintos. Este caso complementa las pruebas directas de callbacks del formulario original, sin sustituirlas por una comprobación de estilos.

[Seguir el recorrido del código](DESARROLLO.md) · [Volver a la práctica](PRACTICA.md)

---

## Continuar el curso

- **Unidad anterior:** [Unidad 23: Accesibilidad en React](../unidad23-accesibilidad/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 25: Pruebas de flujos asíncronos](../unidad25-pruebas-flujos/README.md)
