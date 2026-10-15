# Separar fallos de render y fallos de una acción

[Unidad](README.md) · [Práctica](PRACTICA.md) · [Solución](SOLUCIONES.md)

## 1. Ubica la implementación

Abre [components/LimiteError.jsx](../components/LimiteError.jsx) desde la copia completa del curso. Ejecuta el laboratorio 26 en http://127.0.0.1:5173/#/laboratorio/26.

## 2. Sigue los datos y las decisiones

Widget lanza durante render cuando fallar es true. LimiteError contiene esa pieza y puede mostrar su fallback, mientras Contenido externo preservado y los botones del padre permanecen disponibles. La colocación del límite define qué parte de la experiencia se aísla.

El reintento hace dos cosas: pone fallar=false y aumenta revision. La key nueva recrea el límite, limpiando su estado de error. Si solo cambiaras la key pero Widget continuara fallando, el nuevo montaje volvería a fallar. Un botón de reintento no garantiza haber eliminado la causa.

El fallo de evento se lanza dentro de un handler y se captura allí con try/catch. El componente lo representa como errorEvento. Un boundary no sustituye ese manejo ni convierte automáticamente un rechazo de red en un error de render.

Las categorías esperadas de una consulta pertenecen normalmente al estado de la interacción. El boundary protege de un fallo de render de una pieza; no debe usarse para presentar una colección vacía ni para ocultar cualquier error con una pantalla genérica.

## 3. Contrasta una modificación

Provoca primero el error de render y comprueba qué contenido queda fuera del fallback. Reintenta y espera Widget operativo. Luego provoca el evento y observa el aviso local. En una copia haz fallar siempre al Widget: documenta que recrearlo sin corregir la condición repite el error.

## 4. Resuelve y explica

Completa la [práctica](PRACTICA.md) y contrasta después la [solución razonada](SOLUCIONES.md). Anota la entrada o acción, el resultado que predijiste y el observado; utiliza la diferencia para explicar la decisión del tema.
