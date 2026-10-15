# Separar los archivos construidos del servicio de práctica

[Unidad](README.md) · [Práctica](PRACTICA.md) · [Solución](SOLUCIONES.md)

## 1. Ubica la implementación

Abre [vite.config.js](../vite.config.js) desde la copia completa del curso. Ejecuta el laboratorio 32 en http://127.0.0.1:5173/#/laboratorio/32.

## 2. Sigue los datos y las decisiones

npm run build genera dist con HTML y assets transformados. Las unidades se cargan como módulos de la SPA; no son treinta y tres documentos HTML independientes. El hash permite elegir laboratorio o proyecto dentro de esa misma entrada.

El base relativo ayuda a resolver assets desde una subcarpeta. Una URL como /curso-react/#/laboratorio/18/detalle/1 solicita /curso-react/ al servidor y deja el fragmento para el router. Recargar esa dirección debe volver a obtener la entrada y montar la misma vista.

La API de catálogo es middleware del proceso Vite. El proyecto la ofrece tanto en dev como en preview, por lo que un preview correcto no demuestra que exista en un hosting de solo archivos. Servir únicamente dist es una comprobación distinta y necesaria para entender el alcance.

Las tareas son locales y pueden funcionar sin ese servicio si Storage está disponible. El catálogo debe informar el fallo HTTP del endpoint ausente. No sustituyas el error con recursos inventados para aparentar que publicaste una API.

## 3. Contrasta una modificación

Construye y abre preview. Recorre tarea, detalle y ruta inexistente. Después sirve solo dist bajo una subcarpeta. Agrega una tarea, recarga y confirma persistencia del mismo origen. Carga el catálogo y registra el fallo del endpoint inexistente por separado de la carga de assets.

## 4. Resuelve y explica

Completa la [práctica](PRACTICA.md) y contrasta después la [solución razonada](SOLUCIONES.md). Anota la entrada o acción, el resultado que predijiste y el observado; utiliza la diferencia para explicar la decisión del tema.
