# Solución razonada: Campo controlado y validación

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md)

## Resultado de la referencia

Espacios se rechazan; Ana se recibe normalizada; no se guarda en un servidor.

La implementación completa está en [App.jsx](ejemplo/App.jsx). Si importa un componente de features, revisa también sus reglas, hook/reducer y efectos: la interfaz de la unidad no duplica esa lógica.

## Desarrollo y explicación de la actividad

Cada useId obtiene una relación distinta entre label e input. El callback solo se invoca después de validar; el padre puede guardar nombres ficticios en su propio estado. El valor recibido es Ana, sin espacios exteriores. No declares que el formulario guarda datos remotamente: el ejemplo solo ejecuta una función local. Consulta la prueba real de componentes para observar esas aserciones.

## Contraste que debes poder reproducir

Dos instancias; vacío nativo; un carácter; espacios; Ana; máximo 40.

Compara la entrada y el resultado en la referencia antes de evaluar una variante. Identifica la primera operación que cambia el significado: el punto de conversión, una identidad, una dependencia, una transición o un efecto según el tema. Un mensaje de error distinto puede ser aceptable; presentar un fallo como éxito o perder la identidad de los datos no lo es.

## Comprobación y límites

Conserva casos de entrada y acciones observables. Las [pruebas del curso](../docs/VERIFICACION.md) verifican contratos concretos y rutas; no demuestran todos los programas que puedas construir a partir de ellos. Si agregas una regla nueva, incorpora un caso que falle al romperla, sin convertir cada línea de implementación en una aserción equivalente.

Para los componentes con controles, compara teclado, etiqueta y foco después de cambiar estado. Para efectos o red, comprueba además limpieza y resultados que lleguen tarde. Para ejemplos puros, revisa que la entrada no se modifique accidentalmente. Justifica qué comprobación aplica al tema en lugar de repetir una lista de herramientas sin evidencia.

[Volver a la práctica](PRACTICA.md)

---

## Continuar el curso

- **Unidad anterior:** [Unidad 09: Listas, keys e identidad](../unidad09-listas-keys/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 11: Estado derivado y lifting state up](../unidad11-estado-compartido/README.md)
