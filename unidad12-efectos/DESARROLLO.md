# Separar un cálculo de una sincronización externa

[Unidad](README.md) · [Práctica](PRACTICA.md) · [Solución](SOLUCIONES.md)

## 1. Ubica la implementación

Abre [unidad12-efectos/ejemplo/App.jsx](../unidad12-efectos/ejemplo/App.jsx) desde la copia completa del curso. Ejecuta el laboratorio 12 en http://127.0.0.1:5173/#/laboratorio/12.

## 2. Sigue los datos y las decisiones

busqueda es estado; visibles se obtiene filtrando el arreglo fijo durante render. El cálculo no abre conexiones, no escribe documentos y no necesita cleanup. Guardar visibles en otro estado obligaría a coordinar dos representaciones de la misma información.

El efecto sí toca un recurso externo: document.title. Conserva el título anterior, escribe uno relacionado con la cantidad y devuelve una función que lo restaura. La dependencia es visibles.length porque ese es el valor que el efecto necesita. Dos búsquedas distintas pueden producir la misma cantidad; en ese caso no hay motivo para volver a escribir el mismo título por la sola identidad del arreglo filtrado.

Al salir de la unidad se desmonta el componente y se ejecuta su limpieza. La galería también administra títulos de navegación; observa el destino final en contexto y evita diseñar varios efectos que compitan sin una política. El ejemplo enseña propiedad temporal de un recurso, no un administrador general de metadatos.

## 3. Contrasta una modificación

Añade busqueda.length como párrafo derivado. Busca términos diferentes que mantengan cero coincidencias y observa que la longitud escrita cambia aunque el número de resultados no cambie. Después sal de la unidad y comprueba el título de la nueva ruta. No uses logs de desarrollo como una garantía del número de sincronizaciones en producción.

## 4. Resuelve y explica

Completa la [práctica](PRACTICA.md) y contrasta después la [solución razonada](SOLUCIONES.md). Anota la entrada o acción, el resultado que predijiste y el observado; utiliza la diferencia para explicar la decisión del tema.
