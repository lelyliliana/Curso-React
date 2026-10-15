# Compartir una fuente y derivar tres representaciones

[Unidad](README.md) · [Práctica](PRACTICA.md) · [Solución](SOLUCIONES.md)

## 1. Ubica la implementación

Abre [unidad11-estado-compartido/ejemplo/App.jsx](../unidad11-estado-compartido/ejemplo/App.jsx) desde la copia completa del curso. Ejecuta el laboratorio 11 en http://127.0.0.1:5173/#/laboratorio/11.

## 2. Sigue los datos y las decisiones

App es propietario de cantidad, inicialmente 2. Cada Campo recibe ese valor y una función onCantidad. Al mover A, el componente convierte la cadena del range con Number y comunica un número al padre. El siguiente render entrega la misma cantidad a A y B.

El total se calcula multiplicando por cinco en cada render. No necesita un tercer setter. Si cada Campo guardara su propia copia inicial de cantidad, cambiar A no actualizaría automáticamente B: inicializar desde una prop no establece sincronización permanente.

Añadir un visor solo requiere recibir o leer cantidad en el padre. Para que tres piezas coincidan no necesitas Context; ya existe un ancestro común cercano que puede proporcionar el dato. Elevar estado resuelve coordinación, pero no exige colocar todos los campos de la aplicación en la raíz.

La conversión a número pertenece al límite del control de rango. Con otros campos necesitarías validar ausencia, formato y límites de manera explícita. Number no es una validación universal de entradas humanas, aunque el control concreto entregue un rango acotado en el uso normal.

## 3. Contrasta una modificación

Usa teclado para llevar A a 5. Espera A=5, B=5 y total=25. Cambia B a 0 y después a 10. Añade un párrafo Visor: cantidad y confirma 0 y 10 sin otro useState. Identifica qué función recibe Campo y dónde vive la memoria real.

## 4. Resuelve y explica

Completa la [práctica](PRACTICA.md) y contrasta después la [solución razonada](SOLUCIONES.md). Anota la entrada o acción, el resultado que predijiste y el observado; utiliza la diferencia para explicar la decisión del tema.
