# Escribir una prueba que observe el contrato del formulario

[Unidad](README.md) · [Práctica](PRACTICA.md) · [Solución](SOLUCIONES.md)

## 1. Ubica la implementación

Abre [tests/componentes.test.jsx](../tests/componentes.test.jsx) desde la copia completa del curso. Ejecuta el laboratorio 24 en http://127.0.0.1:5173/#/laboratorio/24.

## 2. Sigue los datos y las decisiones

Una prueba de componente necesita montar la pieza con sus dependencias relevantes, actuar como una persona y observar el resultado. Para FormularioNombre, el callback es un límite explícito: una función espía permite comprobar qué valor aceptado se comunica al padre.

El caso de un carácter debe introducir A y enviar. Espera error y que el callback no se haya ejecutado. Después corrige a Ana y verifica el valor normalizado. Una prueba que solo encuentre el botón después de renderizar no demuestra ninguna de esas decisiones.

Con dos instancias, delimita cada formulario por una región y usa within para buscar su campo. Si consultas globalmente Nombre ficticio, habrá dos coincidencias válidas; eso no es por sí mismo un error del componente. Comprueba además que los id son distintos y cada label mantiene su asociación.

Las pruebas usan userEvent para acciones y esperan sus promesas. getBy busca algo presente ahora; queryBy permite comprobar ausencia; findBy espera una aparición. Elegir una consulta correcta evita temporizadores arbitrarios que hacen pasar un caso sin identificar qué condición se cumplió.

## 3. Contrasta una modificación

Ejecuta primero el caso inválido y luego el válido dentro del mismo flujo de corrección. Monta dos formularios y guarda solo el segundo. El primero no debe llamar su callback. Restaura mocks y desmonta después de cada prueba para que un caso no dependa del anterior.

## 4. Resuelve y explica

Completa la [práctica](PRACTICA.md) y contrasta después la [solución razonada](SOLUCIONES.md). Anota la entrada o acción, el resultado que predijiste y el observado; utiliza la diferencia para explicar la decisión del tema.
