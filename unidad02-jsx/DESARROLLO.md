# Distinguir expresiones, valores y nodos en JSX

[Unidad](README.md) · [Práctica](PRACTICA.md) · [Solución](SOLUCIONES.md)

## 1. Ubica la implementación

Abre [unidad02-jsx/ejemplo/App.jsx](../unidad02-jsx/ejemplo/App.jsx) desde la copia completa del curso. Ejecuta el laboratorio 02 en http://127.0.0.1:5173/#/laboratorio/02.

## 2. Sigue los datos y las decisiones

Las llaves evalúan expresiones de JavaScript. persona.nombre produce una cadena; el operador condicional produce activa o inactiva. Una instrucción if completa no cabe en la misma posición como si fuera una expresión. Puedes decidir antes del return o escoger una expresión adecuada.

El valor de texto contiene signos que parecen una etiqueta. Al colocarlo como hijo, React crea contenido textual, no interpreta una imagen. Inspecciona el DOM: ver los caracteres img no equivale a encontrar un elemento img. Esta observación explica el comportamiento del ejemplo sin afirmar que toda entrada del sistema esté validada.

El operador && devuelve uno de sus operandos, no siempre un booleano. Con cantidad igual a 0, cantidad && contenido devuelve 0, que React puede representar. En cambio cantidad > 0 devuelve false y la expresión no introduce ese cero. Si el propósito es mostrar una cantidad igual a cero, escribirla directamente es correcto.

className corresponde a la clase CSS y htmlFor relaciona una etiqueta con un control. Estas diferencias de sintaxis no eliminan las reglas semánticas del HTML. Mantén jerarquía de encabezados y un contenedor de retorno válido.

## 3. Contrasta una modificación

Compara activo true/false y cantidad 0/1. Registra el valor de la expresión antes de mirar la pantalla. En Elements busca imágenes reales después de mostrar texto con marcado. No uses una API para interpretar HTML solo para hacer desaparecer los signos del ejemplo.

## 4. Resuelve y explica

Completa la [práctica](PRACTICA.md) y contrasta después la [solución razonada](SOLUCIONES.md). Anota la entrada o acción, el resultado que predijiste y el observado; utiliza la diferencia para explicar la decisión del tema.
