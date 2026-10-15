# Explicar qué referencia permite omitir trabajo

[Unidad](README.md) · [Práctica](PRACTICA.md) · [Solución](SOLUCIONES.md)

## 1. Ubica la implementación

Abre [unidad29-memoizacion/ejemplo/App.jsx](../unidad29-memoizacion/ejemplo/App.jsx) desde la copia completa del curso. Ejecuta el laboratorio 29 en http://127.0.0.1:5173/#/laboratorio/29.

## 2. Sigue los datos y las decisiones

datos se declara fuera del componente y es fijo. useMemo calcula visibles cuando q cambia; cambiar contador o elegido no necesita volver a filtrar. useCallback conserva elegir porque no captura un valor cambiante; utiliza el setter estable de elegido.

Lista está envuelta en memo. Con items y onElegir estables, una actualización ajena puede permitir omitir su render. Si pasas items={[...visibles]}, creas otro arreglo en cada render. Aunque los registros sean los mismos, la referencia de esa prop cambia y se pierde esa oportunidad.

Esta optimización no debe cambiar el resultado. Filtrar y elegir siguen funcionando si retiras memoización. Si el programa necesita que la caché jamás se descarte para ser correcto, estás usando la herramienta como almacenamiento de datos esenciales.

La búsqueda utiliza includes sin normalizar mayúsculas. React y react pueden producir resultados diferentes en este laboratorio. No atribuyas esa diferencia a useMemo: es el predicado elegido. Las dependencias deben representar los valores reactivos utilizados por el cálculo o callback.

## 3. Contrasta una modificación

Perfila cambiar contador con la referencia y después con una copia nueva de items. Mantén filtro y número de recursos constantes. Verifica selección después de ambas variantes. Documenta duración, no solo cuántas veces apareció un log de Lista.

## 4. Resuelve y explica

Completa la [práctica](PRACTICA.md) y contrasta después la [solución razonada](SOLUCIONES.md). Anota la entrada o acción, el resultado que predijiste y el observado; utiliza la diferencia para explicar la decisión del tema.
