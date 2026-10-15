# Versión 1.2

Fecha: 2026-10-14 (America/Bogota).

Las 35 unidades incorporan DESARROLLO.md con recorridos específicos del código y soluciones concretas de la práctica. Se retiran párrafos generales repetidos donde el nuevo desarrollo explica la decisión del tema.

La galería conserva sus 33 laboratorios y suma diez extensiones resueltas en rutas propias. Cada extensión tiene código completo y enlace de regreso. El taller incluye un modelo puro de prioridad, serialización v2 y migración de documentos v1 válidos. Ese modelo no migra automáticamente el proyecto visual base, que conserva v1.

La unidad de depuración comprueba explícitamente texto no vacío antes de convertir y sumar; vacío o espacios producen null. Las pruebas cubren ese límite, los nuevos componentes y la migración.

Se conservan las versiones fijadas de React, Router, Vite y herramientas. El recorrido de navegador admite elegir motor y conserva Firefox por defecto para el workflow. La verificación revisa también la presencia de los desarrollos y marcas de codificación dañada en Markdown.

[Recorrido guiado](docs/RECORRIDO_GUIADO.md) · [Resultados y límites](docs/VERIFICACION.md)

## Base 1.1

35 unidades, galería de laboratorios, proyecto de tareas y catálogo, API local, pruebas de reglas/componentes/red y comprobación de publicación estática en subcarpeta. React Compiler y Server Components no están activados.
