# Conectar formulario, validación y resultado del padre

[Unidad](README.md) · [Práctica](PRACTICA.md) · [Solución](SOLUCIONES.md)

## 1. Ubica la implementación

Abre [unidad10-formularios/ejemplo/App.jsx](../unidad10-formularios/ejemplo/App.jsx) desde la copia completa del curso. Ejecuta el laboratorio 10 en http://127.0.0.1:5173/#/laboratorio/10.

## 2. Sigue los datos y las decisiones

FormularioNombre controla nombre y conserva mensajes propios. useId crea las relaciones entre label, input y descripción. Dos instancias ejecutan el mismo componente, pero no deben compartir esos identificadores ni sus campos.

Al enviar, preventDefault conserva la página. trim produce el valor que se evalúa; la regla admite de 2 a 40 unidades de longitud. Una entrada inválida actualiza error, devuelve foco y termina antes de invocar onGuardar. Una válida limpia error, llama al callback y anuncia el resultado.

El padre de la extensión guarda por separado el último nombre de cada formulario. No necesita leer inputs con selectores. El hijo comunica un valor aceptado y el padre decide qué hacer con él. Este callback es síncrono y local; no equivale a confirmar un guardado remoto.

Hay dos capas de validación: required puede impedir el envío vacío antes de ejecutar el handler, y el handler rechaza un carácter o espacios. maxLength limita lo que se introduce normalmente por UI. Una prueba de la función de dominio tendría otro alcance que una prueba que intenta escribir 41 caracteres en un campo limitado.

## 3. Contrasta una modificación

Abre la extensión y escribe A en el primer formulario. No debe cambiar el último nombre del padre. Corrige a Ana con espacios y envía: el padre muestra Ana. Comprueba que el segundo sigue sin guardar. Activa cada etiqueta y verifica que enfoque su propio campo. La extensión opcional de acciones permanece en el laboratorio original.

La [extensión resuelta completa](ejemplo/Solucion.jsx) se ejecuta en http://127.0.0.1:5173/#/solucion/10. Ábrela después de intentar la práctica; la referencia original sigue disponible en el enlace de regreso.

## 4. Resuelve y explica

Completa la [práctica](PRACTICA.md) y contrasta después la [solución razonada](SOLUCIONES.md). Anota la entrada o acción, el resultado que predijiste y el observado; utiliza la diferencia para explicar la decisión del tema.
