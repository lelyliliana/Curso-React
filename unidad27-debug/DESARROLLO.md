# Localizar la primera conversión que cambia el significado

[Unidad](README.md) · [Práctica](PRACTICA.md) · [Solución](SOLUCIONES.md)

## 1. Ubica la implementación

Abre [unidad27-debug/ejemplo/App.jsx](../unidad27-debug/ejemplo/App.jsx) desde la copia completa del curso. Ejecuta el laboratorio 27 en http://127.0.0.1:5173/#/laboratorio/27.

## 2. Sigue los datos y las decisiones

El input entrega texto, aunque su contenido parezca un número. Con texto="12", la expresión texto+3 concatena y produce "123". Number(texto)+3 produce 15, pero convertir sin comprobar ausencia aceptaría un vacío como cero.

La referencia combina trim y Number.isFinite. Exige que haya texto y que la conversión sea finita antes de sumar. No usa parseInt, que podría aceptar una parte inicial de 12abc. Esa decisión es adecuada para este ejercicio; la función analizarCantidad del dominio aplica un contrato más estricto de dígitos y rango.

El pre muestra tipo y valor para poder observar el límite. JSON.stringify representa NaN o Infinity como null si llegaran sin un tratamiento propio; por eso no debes interpretar una captura JSON como si conservara todos los valores de JavaScript. Aquí el componente convierte explícitamente los resultados no finitos a null.

Un breakpoint útil se ubica después de leer el texto y antes de calcular resultado. Añadir otro useEffect no cambia la semántica de + ni valida la entrada.

## 3. Contrasta una modificación

Prueba 12, vacío, espacios, 12abc e Infinity. Compara la cadena original, Number(texto) y la condición que decide resultado. Luego reproduce concatenación en una copia y vuelve a la regla válida. Conserva una regresión que espere el número 15 para "12".

## 4. Resuelve y explica

Completa la [práctica](PRACTICA.md) y contrasta después la [solución razonada](SOLUCIONES.md). Anota la entrada o acción, el resultado que predijiste y el observado; utiliza la diferencia para explicar la decisión del tema.
