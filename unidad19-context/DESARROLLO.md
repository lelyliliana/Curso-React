# Delimitar qué consumidores comparten un contexto

[Unidad](README.md) · [Práctica](PRACTICA.md) · [Solución](SOLUCIONES.md)

## 1. Ubica la implementación

Abre [unidad19-context/ejemplo/App.jsx](../unidad19-context/ejemplo/App.jsx) desde la copia completa del curso. Ejecuta el laboratorio 19 en http://127.0.0.1:5173/#/laboratorio/19.

## 2. Sigue los datos y las decisiones

Tema se crea fuera de los componentes para conservar su identidad. App es propietario del estado claro/oscuro y entrega valor y acción al proveedor. Vista lee el proveedor más cercano que la engloba; no obtiene un dato de cualquier proveedor situado en otra rama.

El valor por defecto es null. La referencia supone estar dentro del proveedor y desestructura directamente. La extensión maneja explícitamente ausencia antes de acceder a tema: el consumidor externo muestra que no hay proveedor y no ofrece una acción inexistente.

Dos consumidores internos leen el mismo estado. Pulsar cualquiera actualiza el padre y ambos reciben el tema nuevo. Un campo de formulario sin relación con ese tema debe conservar su estado local; Context transporta un valor compartido, pero no justifica volver global cualquier edición.

La creación de un objeto value nuevo puede hacer trabajar a consumidores al renderizar el proveedor. Antes de añadir memoización, observa un caso concreto y mide. La corrección del alcance debe estar resuelta antes de discutir rendimiento.

## 3. Contrasta una modificación

Abre la extensión con A y B dentro y Fuera como hermano del proveedor. Cambia desde A y luego desde B. Ambos internos deben coincidir; Fuera continúa con su aviso. No envuelvas Fuera solo para ocultar el caso que el ejercicio pide estudiar.

La [extensión resuelta completa](ejemplo/Solucion.jsx) se ejecuta en http://127.0.0.1:5173/#/solucion/19. Ábrela después de intentar la práctica; la referencia original sigue disponible en el enlace de regreso.

## 4. Resuelve y explica

Completa la [práctica](PRACTICA.md) y contrasta después la [solución razonada](SOLUCIONES.md). Anota la entrada o acción, el resultado que predijiste y el observado; utiliza la diferencia para explicar la decisión del tema.
