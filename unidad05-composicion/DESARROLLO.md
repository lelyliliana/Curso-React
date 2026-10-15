# Diseñar una pieza con regiones de contenido

[Unidad](README.md) · [Práctica](PRACTICA.md) · [Solución](SOLUCIONES.md)

## 1. Ubica la implementación

Abre [unidad05-composicion/ejemplo/App.jsx](../unidad05-composicion/ejemplo/App.jsx) desde la copia completa del curso. Ejecuta el laboratorio 05 en http://127.0.0.1:5173/#/laboratorio/05.

## 2. Sigue los datos y las decisiones

Tarjeta recibe titulo, children y acciones. El componente establece una estructura común, mientras el padre decide el contenido de cada región. children incluye la lista y el párrafo que aparecen entre las etiquetas de apertura y cierre.

acciones recibe un elemento React, no una cadena de HTML. Esa región puede contener un enlace sin que Tarjeta necesite saber cuál es la ruta del proyecto. Así puedes añadir una tarjeta sin copiar el section, el encabezado y los contenedores.

La composición evita una lista creciente de banderas como esRuta, esProyecto y tieneLista. Muchas banderas combinadas pueden producir estados que nunca diseñaste. Pasar contenido permite que el padre exprese la variación, y la pieza común se concentra en su estructura.

En esta galería ya existe un router, pero la referencia utiliza un enlace hash sencillo. Un enlace representa navegación y conserva acciones del navegador. Un botón corresponde a una acción de la página; cambiar su onClick para navegar sin necesidad pierde esa semántica. La elección de estructura también debe respetar la jerarquía de encabezados del lugar donde reutilizas la tarjeta.

## 3. Contrasta una modificación

Añade una segunda Tarjeta con titulo Proyecto de estudio, un párrafo propio y acciones apuntando a #/proyecto. Recorre ambos enlaces con Tab y Enter. Modifica después la estructura de Tarjeta una sola vez y observa que las dos instancias reciben el cambio.

## 4. Resuelve y explica

Completa la [práctica](PRACTICA.md) y contrasta después la [solución razonada](SOLUCIONES.md). Anota la entrada o acción, el resultado que predijiste y el observado; utiliza la diferencia para explicar la decisión del tema.
