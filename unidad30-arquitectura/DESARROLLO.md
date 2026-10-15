# Leer la arquitectura siguiendo una acción de extremo a extremo

[Unidad](README.md) · [Práctica](PRACTICA.md) · [Solución](SOLUCIONES.md)

## 1. Ubica la implementación

Abre [features/tareas/Tareas.jsx](../features/tareas/Tareas.jsx) desde la copia completa del curso. Ejecuta el laboratorio 30 en http://127.0.0.1:5173/#/laboratorio/30.

## 2. Sigue los datos y las decisiones

Comienza en enviar de Tareas: valida el campo y despacha agregar o editar. El reducer delega la regla en dominio, produce la colección y aumenta revisión. El componente deriva visibles y un efecto intenta persistir. Seguir esa acción explica las dependencias mejor que contar carpetas.

El dominio no importa React, Storage ni componentes. Las reglas pueden probarse con Node. El adaptador de almacenamiento importa serialización del dominio; la UI coordina los límites. El catálogo tiene su cliente y hook porque representa otra responsabilidad y otra fuente de datos.

La búsqueda ya existe en la feature. Antes de prometer añadirla, identifica su estado buscar y filtrarTareas. Una extensión útil puede añadir una vista derivada del número de pendientes o cambiar una política de búsqueda con pruebas, sin copiar el CRUD a otro componente.

Las acciones reciben id. Si visibles contiene solo un subconjunto, su índice no representa la posición original. La arquitectura pierde valor si una capa vuelve a introducir asociaciones por posición que el dominio ya había resuelto.

## 3. Contrasta una modificación

Dibuja las dependencias UI → reducer → dominio y UI → almacenamiento → dominio. Sigue una edición desde una vista filtrada. Añade una cuenta derivada de pendientes y verifica que buscar no cambie el total de la colección. Comprueba que el dominio sigue sin importar la interfaz.

## 4. Resuelve y explica

Completa la [práctica](PRACTICA.md) y contrasta después la [solución razonada](SOLUCIONES.md). Anota la entrada o acción, el resultado que predijiste y el observado; utiliza la diferencia para explicar la decisión del tema.
