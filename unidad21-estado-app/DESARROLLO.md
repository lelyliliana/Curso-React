# Combinar criterios y elegir dónde vive cada dato

[Unidad](README.md) · [Práctica](PRACTICA.md) · [Solución](SOLUCIONES.md)

## 1. Ubica la implementación

Abre [unidad21-estado-app/ejemplo/App.jsx](../unidad21-estado-app/ejemplo/App.jsx) desde la copia completa del curso. Ejecuta el laboratorio 21 en http://127.0.0.1:5173/#/laboratorio/21.

## 2. Sigue los datos y las decisiones

Las tareas del laboratorio son datos fijos. filtro es memoria local y visibles es una colección derivada. Al elegir completadas no eliminas las pendientes: solo cambia la condición que acepta registros para esa vista.

La extensión agrega busqueda y combina ambas condiciones mediante &&. El estado debe coincidir y el título debe incluir el término normalizado. Una búsqueda vacía acepta todos los títulos que pasan el filtro. El número total se calcula desde la colección fuente y no desde la longitud visible.

Este estado local se reinicia al desmontar. Si la búsqueda debiera compartirse mediante un enlace, la URL sería una fuente adecuada, como en la unidad 18. Si debiera sobrevivir sin compartir enlace, podrías estudiar persistencia. Esas necesidades no se satisfacen por llamar a una variable global.

La normalización de mayúsculas con locale es no elimina tildes. La práctica no promete búsqueda fonética ni un motor de indexación. Define esas expectativas antes de cambiar el criterio y verifica que las acciones de una lista editable sigan utilizando id.

## 3. Contrasta una modificación

Busca pra con Todas y después selecciona Pendientes: debe haber cero. Cambia a Completadas: aparece Practicar. Borra búsqueda y vuelve a Todas: reaparecen dos tareas. Recargar reinicia ambos controles porque esta extensión no guarda ni escribe parámetros de URL.

La [extensión resuelta completa](ejemplo/Solucion.jsx) se ejecuta en http://127.0.0.1:5173/#/solucion/21. Ábrela después de intentar la práctica; la referencia original sigue disponible en el enlace de regreso.

## 4. Resuelve y explica

Completa la [práctica](PRACTICA.md) y contrasta después la [solución razonada](SOLUCIONES.md). Anota la entrada o acción, el resultado que predijiste y el observado; utiliza la diferencia para explicar la decisión del tema.
