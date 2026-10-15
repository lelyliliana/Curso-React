# Extender una transición y comprobar su pureza

[Unidad](README.md) · [Práctica](PRACTICA.md) · [Solución](SOLUCIONES.md)

## 1. Ubica la implementación

Abre [unidad20-usereducer/ejemplo/App.jsx](../unidad20-usereducer/ejemplo/App.jsx) desde la copia completa del curso. Ejecuta el laboratorio 20 en http://127.0.0.1:5173/#/laboratorio/20.

## 2. Sigue los datos y las decisiones

El reducer recibe cantidad y una acción. No lee el DOM, no escribe Storage y no conoce eventos. sumar devuelve cantidad+1, restar conserva un mínimo de cero y reiniciar devuelve cero. Una acción desconocida lanza un error de programación en este ejemplo.

La extensión añade sumarDos y delega las demás acciones al reducer original. La forma de estado permanece numérica. dispatch comunica una intención; no es una asignación que cambie inmediatamente la variable capturada por el handler.

Para comprobar pureza, llama dos veces con estado 4 y acción sumarDos. Ambas deben producir 6. No uses la cantidad de renders de desarrollo como el criterio principal. En un reducer con objetos también deberías comprobar que la entrada original permanece intacta; con este número la inmutabilidad no requiere copiar un objeto.

El reducer de tareas maneja otro contrato: conserva errores esperados como parte del estado y aumenta revisión solo tras cambios válidos. No generalices la política de acciones desconocidas del contador a todos los errores del proyecto.

## 3. Contrasta una modificación

Resta desde cero, suma dos y reinicia. Ejecuta además el reducer exportado directamente en una prueba con las mismas entradas. Escribe expectativas antes de leer su implementación; evita comprobar únicamente que cada botón reproduce una línea del switch.

La [extensión resuelta completa](ejemplo/Solucion.jsx) se ejecuta en http://127.0.0.1:5173/#/solucion/20. Ábrela después de intentar la práctica; la referencia original sigue disponible en el enlace de regreso.

## 4. Resuelve y explica

Completa la [práctica](PRACTICA.md) y contrasta después la [solución razonada](SOLUCIONES.md). Anota la entrada o acción, el resultado que predijiste y el observado; utiliza la diferencia para explicar la decisión del tema.
