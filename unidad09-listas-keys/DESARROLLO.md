# Observar qué identidad conserva un campo al reordenar

[Unidad](README.md) · [Práctica](PRACTICA.md) · [Solución](SOLUCIONES.md)

## 1. Ubica la implementación

Abre [unidad09-listas-keys/ejemplo/App.jsx](../unidad09-listas-keys/ejemplo/App.jsx) desde la copia completa del curso. Ejecuta el laboratorio 09 en http://127.0.0.1:5173/#/laboratorio/09.

## 2. Sigue los datos y las decisiones

Los registros de Ana y Luis contienen id estables. El map usa ese id como key y también lo incorpora al id del input. La etiqueta conserva su asociación aunque se invierta el orden visual.

Cada input utiliza defaultValue, así que su edición queda en el elemento no controlado. Esa elección permite observar la identidad del nodo: al reordenar con keys correctas, el alias escrito continúa con la misma persona. Cambiar el orden de los datos no debería convertir el alias de Ana en el de Luis.

Al usar el índice como key, React relaciona la fila con su posición. Tras invertir, esa posición representa otra persona, mientras el campo puede conservar la edición anterior. Cambiar los textos de las etiquetas puede crear una apariencia convincente y un dato asociado al registro equivocado.

La transformación [...p].reverse() copia antes de invertir. reverse modifica el arreglo sobre el que opera; aplicarlo directamente al estado sería una segunda alteración del contrato que dificultaría aislar el problema de keys. Mantén la copia al experimentar con la identidad.

## 3. Contrasta una modificación

Escribe Alfa para Ana y Beta para Luis. Invierte dos veces con keys por id. Después repite desde un montaje nuevo usando el índice como key. Observa el valor del campo junto con la etiqueta, no solo el orden del texto. No confundas la advertencia de una key ausente con la detección automática de una key semánticamente incorrecta.

## 4. Resuelve y explica

Completa la [práctica](PRACTICA.md) y contrasta después la [solución razonada](SOLUCIONES.md). Anota la entrada o acción, el resultado que predijiste y el observado; utiliza la diferencia para explicar la decisión del tema.
