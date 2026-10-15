# Conservar y reiniciar una instancia de forma selectiva

[Unidad](README.md) · [Práctica](PRACTICA.md) · [Solución](SOLUCIONES.md)

## 1. Ubica la implementación

Abre [unidad03-componentes/ejemplo/App.jsx](../unidad03-componentes/ejemplo/App.jsx) desde la copia completa del curso. Ejecuta el laboratorio 03 en http://127.0.0.1:5173/#/laboratorio/03.

## 2. Sigue los datos y las decisiones

Contador es una definición reutilizable. Primero y Segundo son dos instancias con memoria independiente. El valor titulo cambia la etiqueta, pero no une sus estados. Pulsar Primero solicita actualizar únicamente la memoria de la instancia que creó ese handler.

La extensión añade Tercero y una revisión en el padre. Esa revisión se usa como key exclusivamente en Primero. Incrementarla cambia su identidad; React desmonta esa instancia y crea otra con cantidad inicial 0. Segundo y Tercero mantienen tipo y posición, por lo que conservan su memoria.

Mover useState fuera de Contador al padre sería otra arquitectura: permitiría compartir o coordinar cantidades. No es necesario para demostrar independencia. Tampoco se debe definir Contador dentro de App en cada render: una definición nueva puede alterar la identidad del tipo y provocar reinicios difíciles de interpretar.

Una key no es un comando universal de limpieza. Úsala cuando quieres una identidad nueva. Cambiarla en cada render o generarla aleatoriamente borraría memoria continuamente y podría perder el foco de un campo en edición.

## 3. Contrasta una modificación

Abre la extensión resuelta, suma dos veces en Primero y una en Segundo. Pulsa Recrear Primero. Espera 0, 1 y 0 respectivamente. Pulsa después en Tercero y vuelve a recrear Primero: el tercero debe conservar su cantidad. Esta secuencia distingue reinicio selectivo de reiniciar toda la página.

La [extensión resuelta completa](ejemplo/Solucion.jsx) se ejecuta en http://127.0.0.1:5173/#/solucion/03. Ábrela después de intentar la práctica; la referencia original sigue disponible en el enlace de regreso.

## 4. Resuelve y explica

Completa la [práctica](PRACTICA.md) y contrasta después la [solución razonada](SOLUCIONES.md). Anota la entrada o acción, el resultado que predijiste y el observado; utiliza la diferencia para explicar la decisión del tema.
