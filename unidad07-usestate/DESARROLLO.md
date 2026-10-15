# Calcular una cola de actualizaciones antes del siguiente render

[Unidad](README.md) · [Práctica](PRACTICA.md) · [Solución](SOLUCIONES.md)

## 1. Ubica la implementación

Abre [unidad07-usestate/ejemplo/App.jsx](../unidad07-usestate/ejemplo/App.jsx) desde la copia completa del curso. Ejecuta el laboratorio 07 en http://127.0.0.1:5173/#/laboratorio/07.

## 2. Sigue los datos y las decisiones

En el primer render cantidad vale 0. El handler sumarTres conserva ese snapshot. Las tres funciones n => n + 1 se incorporan a la cola; al procesarlas, los resultados pendientes son 1, 2 y 3. No hace falta que la variable capturada cambie dentro del handler.

Ahora contrasta tres reemplazos cantidad + 1. Los tres cálculos se hacen desde el mismo 0 y solicitan 1. No representan tres incrementos encadenados. Después de otra pulsación, el handler del nuevo render ve 1 y solicita 2. La diferencia se explica por qué se encoló, no por la rapidez de la persona.

Los actualizadores deben ser puros. No envíes una petición ni guardes Storage dentro de ellos para contar cuántas veces se ejecutan. Las comprobaciones de desarrollo pueden repetir cálculos y no convierten un actualizador en un lugar válido para efectos externos.

Reiniciar solicita el valor 0 y no necesita depender de la cantidad anterior. Elegir entre reemplazo y actualización funcional depende de la operación. La forma funcional expresa una transformación del valor pendiente; no es una obligación mecánica para cualquier setter.

## 3. Contrasta una modificación

Construye una tabla desde cero: una pulsación, segunda pulsación, reinicio y otra pulsación. Repite con reemplazos en tu copia. Los resultados correctos son 3, 6, 0, 3; la variante de reemplazos produce 1, 2, 0, 1. Restaura los actualizadores antes de avanzar.

## 4. Resuelve y explica

Completa la [práctica](PRACTICA.md) y contrasta después la [solución razonada](SOLUCIONES.md). Anota la entrada o acción, el resultado que predijiste y el observado; utiliza la diferencia para explicar la decisión del tema.
