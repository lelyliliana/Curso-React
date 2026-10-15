# Representar estados excluyentes sin confundir sus causas

[Unidad](README.md) · [Práctica](PRACTICA.md) · [Solución](SOLUCIONES.md)

## 1. Ubica la implementación

Abre [unidad08-condicional/ejemplo/App.jsx](../unidad08-condicional/ejemplo/App.jsx) desde la copia completa del curso. Ejecuta el laboratorio 08 en http://127.0.0.1:5173/#/laboratorio/08.

## 2. Sigue los datos y las decisiones

La referencia utiliza una sola fase seleccionada y un diccionario de mensajes. Solo success muestra la lista. empty significa que una consulta terminó sin resultados; error significa que no se completó satisfactoriamente. Ambas pantallas pueden carecer de filas y aun así requieren explicaciones diferentes.

La extensión añade denied al diccionario. El select obtiene sus opciones de las mismas claves, así que no hay una segunda lista de fases que deba actualizarse a mano. denied tiene un mensaje de permiso y tampoco muestra resultados. En esta demostración se anuncia como alert igual que error.

Seleccionar denied no implementa autorización. Es una simulación de interfaz: una aplicación real debe recibir y respetar decisiones del servidor. Esconder la lista con JSX no protege por sí mismo los datos que ya llegaron al navegador.

Una sola fase evita combinaciones como loading=true y error=true sin una política definida. En sistemas donde se muestran datos anteriores durante una actualización, el modelo puede necesitar más información. No agregues banderas hasta describir esa experiencia y las transiciones válidas.

## 3. Contrasta una modificación

Recorre idle, loading, success, empty, error y denied. Registra mensaje, presencia de lista y rol del anuncio. Cambiar de success a denied debe retirar la lista. Volver a success debe mostrarla otra vez sin acumular copias.

La [extensión resuelta completa](ejemplo/Solucion.jsx) se ejecuta en http://127.0.0.1:5173/#/solucion/08. Ábrela después de intentar la práctica; la referencia original sigue disponible en el enlace de regreso.

## 4. Resuelve y explica

Completa la [práctica](PRACTICA.md) y contrasta después la [solución razonada](SOLUCIONES.md). Anota la entrada o acción, el resultado que predijiste y el observado; utiliza la diferencia para explicar la decisión del tema.
