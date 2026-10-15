# Separar envío, acción local y destino del evento

[Unidad](README.md) · [Práctica](PRACTICA.md) · [Solución](SOLUCIONES.md)

## 1. Ubica la implementación

Abre [unidad06-eventos/ejemplo/App.jsx](../unidad06-eventos/ejemplo/App.jsx) desde la copia completa del curso. Ejecuta el laboratorio 06 en http://127.0.0.1:5173/#/laboratorio/06.

## 2. Sigue los datos y las decisiones

El formulario escucha onSubmit. Su handler llama preventDefault para evitar la navegación nativa y actualiza el mensaje. El primer botón no declara tipo y dentro de este formulario actúa como submit. El segundo declara type="button", de modo que su acción local no envía el formulario.

onClick recibe una función que se ejecutará cuando ocurra el evento. Escribir el resultado de invocarla durante render cambiaría el momento de ejecución. Esa distinción también importa cuando debes pasar un argumento: una función flecha puede aplazar la llamada.

Al añadir un span dentro del botón, target puede ser ese span si allí comenzó el evento. currentTarget sigue siendo el botón cuyo listener se está ejecutando. Leer su textContent permite obtener el texto del control, aunque el clic haya comenzado en un descendiente.

No uses preventDefault como sustituto de elegir el tipo correcto del botón. Tampoco necesitas detener propagación para una acción local solo porque exista un formulario. Cancelar el comportamiento predeterminado y detener la propagación resuelven problemas distintos.

## 3. Contrasta una modificación

Envuelve Acción local en un span. Haz clic sobre ese texto y sobre otra zona del botón; inspecciona target y currentTarget dentro del handler. Luego usa Tab y Enter en ambos controles. El envío debe cambiar el aviso sin cambiar la URL y la acción local no debe mostrar el mensaje del submit.

## 4. Resuelve y explica

Completa la [práctica](PRACTICA.md) y contrasta después la [solución razonada](SOLUCIONES.md). Anota la entrada o acción, el resultado que predijiste y el observado; utiliza la diferencia para explicar la decisión del tema.
