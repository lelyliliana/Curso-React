# Controlar promesas para demostrar el orden correcto

[Unidad](README.md) · [Práctica](PRACTICA.md) · [Solución](SOLUCIONES.md)

## 1. Ubica la implementación

Abre [tests/componentes.test.jsx](../tests/componentes.test.jsx) desde la copia completa del curso. Ejecuta el laboratorio 25 en http://127.0.0.1:5173/#/laboratorio/25.

## 2. Sigue los datos y las decisiones

La prueba de carrera sustituye cargar, que es el límite del cliente HTTP, pero mantiene Catalogo y el hook reales. Dos promesas pendientes permiten decidir el orden exacto de resolución. Así no necesitas que una API pública resulte lenta por casualidad.

Inicia A y B. Resuelve B con Nuevo y espera que aparezca. Después resuelve A con Antiguo dentro de act y comprueba que la lista continúa mostrando Nuevo. La expectativa tras resolver A es la que detectaría una regresión de la guarda de identidad; comprobar solo que ambas promesas terminan sería insuficiente.

Los ensayos de vacío y error también son diferentes. Una promesa resuelta con [] debe producir empty; una rechazada con categoría http debe producir error. El cliente real se prueba por separado con HTTP local, de modo que el mock de componente no pretende demostrar análisis de JSON o códigos HTTP reales.

Evita limpiar o reiniciar el componente entre A y B: eliminarías la coexistencia que necesitas estudiar. También verifica loading antes de resolver para distinguir un flujo realmente pendiente de un resultado predefinido que ya estaba en pantalla.

## 3. Contrasta una modificación

Lee el caso Resultado obsoleto ignorado aunque el cliente no atienda abort. Relaciona cada resolver con su posición de solicitud. Explica qué aserción fallaría si se retirara la comparación de id del hook. Después ejecuta el caso de respuesta vacía y el de HTTP fallido por separado.

## 4. Resuelve y explica

Completa la [práctica](PRACTICA.md) y contrasta después la [solución razonada](SOLUCIONES.md). Anota la entrada o acción, el resultado que predijiste y el observado; utiliza la diferencia para explicar la decisión del tema.
