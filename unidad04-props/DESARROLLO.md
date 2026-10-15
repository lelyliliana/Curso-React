# Definir un contrato de props sin borrar valores válidos

[Unidad](README.md) · [Práctica](PRACTICA.md) · [Solución](SOLUCIONES.md)

## 1. Ubica la implementación

Abre [unidad04-props/ejemplo/App.jsx](../unidad04-props/ejemplo/App.jsx) desde la copia completa del curso. Ejecuta el laboratorio 04 en http://127.0.0.1:5173/#/laboratorio/04.

## 2. Sigue los datos y las decisiones

La desestructuración cupos = 20 aplica el valor por defecto cuando la prop está ausente o es undefined. No lo aplica a 0 ni a null. Por eso la referencia permite observar tres resultados distintos antes de añadir validación.

En la extensión null significa desconocido. Un entero no negativo significa cantidad conocida; cualquier otro dato muestra un mensaje de entrada inválida. El valor predeterminado sigue siendo 20. Esa decisión conserva 0 sin convertirlo en ausencia y rechaza la cadena "3" aunque parezca numérica.

No uses cupos || 20 para resolverlo: 0 es falsy y perderías un valor válido. cupos ?? 20 también cambiaría la política elegida para null. Ningún operador conoce por sí mismo el significado de desconocido; primero define el contrato y después escribe la condición.

La validación aquí presenta una ficha; no pretende sustituir validaciones de una API o de un dominio distinto. Mostrar un aviso dentro de esta pieza evita que un dato incorrecto destruya todas las fichas. En una biblioteca de componentes podrías elegir un contrato que lance errores de programación, pero debes explicitarlo.

## 3. Contrasta una modificación

Compara seis fichas: cero, ausente, undefined, null, negativo y cadena. Después prueba 1.5 en tu copia. Conserva la diferencia entre valor inválido y cantidad desconocida. Verifica que el nombre de cada ficha permita atribuir el mensaje al caso correcto.

La [extensión resuelta completa](ejemplo/Solucion.jsx) se ejecuta en http://127.0.0.1:5173/#/solucion/04. Ábrela después de intentar la práctica; la referencia original sigue disponible en el enlace de regreso.

## 4. Resuelve y explica

Completa la [práctica](PRACTICA.md) y contrasta después la [solución razonada](SOLUCIONES.md). Anota la entrada o acción, el resultado que predijiste y el observado; utiliza la diferencia para explicar la decisión del tema.
