# Solución razonada: Funciones de evento y comportamiento nativo

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md)

## Resultado de la referencia

Enviar cambia el mensaje sin navegar; Acción local informa su texto.

La implementación completa está en [App.jsx](ejemplo/App.jsx). Si importa un componente de features, revisa también sus reglas, hook/reducer y efectos: la interfaz de la unidad no duplica esa lógica.

## Desarrollo y explicación de la actividad

target puede ser el span pulsado; currentTarget sigue siendo el botón cuyo handler se está ejecutando. Extrae de inmediato los datos necesarios dentro del handler en vez de depender de un objeto de evento en un trabajo posterior. Enter en un formulario y click en el submit deben cumplir el mismo contrato. No sustituyas submit por un div clicable.

## Resolución concreta de la práctica

Mantén `type="button"` y cambia su contenido a `<span>Acción local</span>`. Dentro del handler puedes registrar e.target.tagName y e.currentTarget.tagName antes de setMensaje. Un clic sobre el span puede producir SPAN y BUTTON; el texto visible del aviso sigue siendo Pulsado: Acción local. Con teclado se conserva la activación nativa sin añadir listeners de teclas que dupliquen la acción.

[Seguir el recorrido del código](DESARROLLO.md) · [Volver a la práctica](PRACTICA.md)

---

## Continuar el curso

- **Unidad anterior:** [Unidad 05: Composición](../unidad05-composicion/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 07: Estado con useState](../unidad07-usestate/README.md)
