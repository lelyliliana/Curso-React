# Seguir carga, revisión y escritura sin prometer recuperación

[Unidad](README.md) · [Práctica](PRACTICA.md) · [Solución](SOLUCIONES.md)

## 1. Ubica la implementación

Abre [features/tareas/Tareas.jsx](../features/tareas/Tareas.jsx) desde la copia completa del curso. Ejecuta el laboratorio 22 en http://127.0.0.1:5173/#/laboratorio/22.

## 2. Sigue los datos y las decisiones

inicializar intenta leer y validar la clave curso-react-tareas-v1. Si falla, devuelve una colección vacía con aviso. estadoInicial fija revision=0. El efecto de guardado termina sin escribir mientras revisión sea cero, de modo que montar no reemplaza el texto corrupto.

Una acción válida pasa por el reducer, produce una colección aceptada y aumenta revisión. Entonces el efecto intenta guardar. Por diseño, esa acción puede reemplazar el documento corrupto por los datos de la sesión. No hay bloqueo permanente ni recuperación automática de los registros que no se pudieron leer. Copia el contenido si necesitas examinarlo antes de actuar.

guardar serializa un sobre con version:1 y valida la colección íntegra. Storage puede fallar al acceder o al escribir; el componente captura esas fronteras y conserva la memoria visible. Avisar que no se guardó es distinto de deshacer la acción.

La misma clave se comparte entre el proyecto y los laboratorios que montan Tareas, dentro del mismo origen. Dos pestañas no se coordinan en tiempo real. Cambiar puerto cambia el origen y, por tanto, el almacenamiento accesible.

## 3. Contrasta una modificación

Con datos ficticios, conserva una copia de la clave y reemplázala por JSON inválido. Recarga y comprueba que permanece igual antes de cualquier acción. Luego agrega una tarea y observa el reemplazo válido. En otro ensayo fuerza setItem a lanzar y confirma que la tarea queda visible con aviso.

## 4. Resuelve y explica

Completa la [práctica](PRACTICA.md) y contrasta después la [solución razonada](SOLUCIONES.md). Anota la entrada o acción, el resultado que predijiste y el observado; utiliza la diferencia para explicar la decisión del tema.
