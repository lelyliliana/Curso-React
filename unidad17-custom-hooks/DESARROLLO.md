# Reutilizar lógica y definir qué significa reiniciar

[Unidad](README.md) · [Práctica](PRACTICA.md) · [Solución](SOLUCIONES.md)

## 1. Ubica la implementación

Abre [unidad17-custom-hooks/ejemplo/App.jsx](../unidad17-custom-hooks/ejemplo/App.jsx) desde la copia completa del curso. Ejecuta el laboratorio 17 en http://127.0.0.1:5173/#/laboratorio/17.

## 2. Sigue los datos y las decisiones

Cada llamada a useContador crea su propia memoria. A empieza en 0 y B en 10; llamar al mismo hook no los convierte en dos accesos a un contador global. Extraer el código cambia su organización, no el propietario de la instancia.

La extensión añade restar con Math.max(0, n - 1). La transición depende del valor pendiente y conserva el mínimo cero. Un tercer Control empieza en 100. Las entradas de esta demostración son números no negativos definidos por el padre; si abrieras el hook a datos arbitrarios necesitarías ampliar su contrato de validación.

Al cambiar inicio de C a 50, useState no vuelve a inicializar cantidad. La instancia conserva su memoria actual. reiniciar, en cambio, se crea en el render con la prop actual y solicita ese inicio. Así se distingue valor inicial de una orden de reinicio. No añadas un efecto que borre la cantidad automáticamente sin que esa sea la experiencia definida.

## 3. Contrasta una modificación

Resta dos veces en A y confirma cero. Suma en B y verifica que A no cambió. En C suma a 101, cambia inicio a 50 y comprueba que sigue 101. Pulsa Reiniciar C y espera 50. Este ensayo hace visible el contrato cuando una prop cambia después del montaje.

La [extensión resuelta completa](ejemplo/Solucion.jsx) se ejecuta en http://127.0.0.1:5173/#/solucion/17. Ábrela después de intentar la práctica; la referencia original sigue disponible en el enlace de regreso.

## 4. Resuelve y explica

Completa la [práctica](PRACTICA.md) y contrasta después la [solución razonada](SOLUCIONES.md). Anota la entrada o acción, el resultado que predijiste y el observado; utiliza la diferencia para explicar la decisión del tema.
