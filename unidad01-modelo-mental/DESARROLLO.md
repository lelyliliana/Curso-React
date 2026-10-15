# Reconstruir una vista a partir de un solo dato

[Unidad](README.md) · [Práctica](PRACTICA.md) · [Solución](SOLUCIONES.md)

## 1. Ubica la implementación

Abre [unidad01-modelo-mental/ejemplo/App.jsx](../unidad01-modelo-mental/ejemplo/App.jsx) desde la copia completa del curso. Ejecuta el laboratorio 01 en http://127.0.0.1:5173/#/laboratorio/01.

## 2. Sigue los datos y las decisiones

nombre es la memoria editable y saludo es un cálculo del render. La primera ejecución recibe Ana, construye Hola, Ana y entrega value al input. El evento proporciona texto nuevo; setNombre solicita otro render. En esa ejecución se recalcula saludo antes de describir el nuevo párrafo.

Añadir una longitud no requiere una segunda memoria: nombre.length se deriva del mismo valor. Si guardaras ambos y olvidaras actualizar uno, la interfaz podría mostrar Luis con longitud 3. Ese estado inconsistente fue introducido por el diseño, no por una demora de React.

La entrada no necesita un envío porque el contrato de este ejemplo es responder mientras escribes. El formulario de una unidad posterior tendrá otra intención. Tampoco necesitas buscar el párrafo con querySelector: al mezclar escrituras manuales con React crearías dos responsables del mismo contenido.

La longitud de JavaScript cuenta unidades UTF-16. Ana tiene 3; algunos símbolos visibles utilizan dos unidades. Si tu dominio requiriera contar grafemas, habría que definir otra regla. Aquí aprende primero a distinguir el dato fuente de una representación derivada.

## 3. Contrasta una modificación

Escribe Luis, vacía el campo e introduce un texto largo. Anota nombre, saludo y longitud para cada caso. Luego vuelve al laboratorio 00 y regresa: esta instancia se monta otra vez y comienza con Ana. La permanencia durante un render no implica persistencia entre montajes ni entre recargas.

## 4. Resuelve y explica

Completa la [práctica](PRACTICA.md) y contrasta después la [solución razonada](SOLUCIONES.md). Anota la entrada o acción, el resultado que predijiste y el observado; utiliza la diferencia para explicar la decisión del tema.
