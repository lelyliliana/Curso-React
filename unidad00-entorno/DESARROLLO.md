# Seguir el recorrido desde HTML hasta el componente

[Unidad](README.md) · [Práctica](PRACTICA.md) · [Solución](SOLUCIONES.md)

## 1. Ubica la implementación

Abre [src/main.jsx](../src/main.jsx) desde la copia completa del curso. Ejecuta el laboratorio 00 en http://127.0.0.1:5173/#/laboratorio/00.

## 2. Sigue los datos y las decisiones

El navegador solicita index.html. Ese documento contiene el contenedor y la entrada de módulos; no contiene una copia escrita de cada laboratorio. Sigue el import de src/main.jsx: crea la raíz React, activa StrictMode y coloca el router antes de App. El router común explica por qué los ejemplos de rutas funcionan sin crear otro proveedor en cada unidad.

Después abre src/App.jsx. El registro relaciona 00 con un import dinámico y el parámetro de la URL elige qué componente montar. Suspense puede mostrar una espera mientras llega ese módulo. La función App de la unidad devuelve la sección visible. Cambiar ese texto modifica la fuente que Vite transforma; no modifica los datos de todas las unidades.

Separa tres situaciones: el proceso no escucha, el módulo no puede resolverse y el componente no compila. Las tres pueden impedir ver la lección, pero ocurren en límites distintos. El panel Network permite localizar una petición fallida; la terminal identifica archivo y sintaxis. Reiniciar el equipo no explica ninguna de las tres causas.

## 3. Contrasta una modificación

Abre /#/laboratorio/00 y cambia únicamente el párrafo del ejemplo. Conserva el h2 para reconocer que sigues dentro del mismo laboratorio. Después omite deliberadamente el cierre de p, registra archivo/línea y restáuralo. Finalmente observa un import inexistente en una copia: corregir la etiqueta no resolvería esa ruta. Termina con el componente válido y ejecuta npm run check.

## 4. Resuelve y explica

Completa la [práctica](PRACTICA.md) y contrasta después la [solución razonada](SOLUCIONES.md). Anota la entrada o acción, el resultado que predijiste y el observado; utiliza la diferencia para explicar la decisión del tema.
