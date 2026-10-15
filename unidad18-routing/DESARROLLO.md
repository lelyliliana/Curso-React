# Relacionar URL, búsqueda, detalle y ausencia

[Unidad](README.md) · [Práctica](PRACTICA.md) · [Solución](SOLUCIONES.md)

## 1. Ubica la implementación

Abre [unidad18-routing/ejemplo/App.jsx](../unidad18-routing/ejemplo/App.jsx) desde la copia completa del curso. Ejecuta el laboratorio 18 en http://127.0.0.1:5173/#/laboratorio/18.

## 2. Sigue los datos y las decisiones

La galería ya contiene HashRouter. El laboratorio declara Routes anidadas para índice, detalle/:id y ruta desconocida. Agregar otro router dentro del ejemplo sería innecesario y puede romper su contexto.

La búsqueda se lee de useSearchParams; por eso recargar una URL con q conserva el filtro. No hay otro useState para la misma búsqueda. setParams usa replace, evitando crear una entrada de historial por cada letra. Eso no significa que todos los pasos de navegación se sustituyan: entrar a un detalle mediante Link tiene su comportamiento normal.

useParams entrega texto. Antes de convertir id, la expresión regular exige un entero positivo escrito sin sufijos. Un id válido pero ausente produce Recurso no encontrado; una ruta que no coincide con detalle cae en Ruta no encontrada. El enlace de regreso usa una ruta absoluta y no arrastra necesariamente el filtro anterior.

El fragmento hash no se envía al servidor como ruta de recurso. Esto facilita hosting estático, pero no publica una API ni resuelve por sí mismo rutas de assets bajo cualquier configuración.

## 3. Contrasta una modificación

Abre /#/laboratorio/18?q=React, recarga y confirma búsqueda. Abre directamente detalle/1, detalle/99 y detalle/abc. Prueba también una subruta inexistente. Distingue la inexistencia de un registro de la inexistencia de una ruta. Usa Atrás y registra que replace no conserva cada letra como una página anterior.

## 4. Resuelve y explica

Completa la [práctica](PRACTICA.md) y contrasta después la [solución razonada](SOLUCIONES.md). Anota la entrada o acción, el resultado que predijiste y el observado; utiliza la diferencia para explicar la decisión del tema.
