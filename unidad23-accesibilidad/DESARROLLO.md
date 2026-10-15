# Relacionar un anuncio con un destino de foco estable

[Unidad](README.md) · [Práctica](PRACTICA.md) · [Solución](SOLUCIONES.md)

## 1. Ubica la implementación

Abre [unidad23-accesibilidad/ejemplo/App.jsx](../unidad23-accesibilidad/ejemplo/App.jsx) desde la copia completa del curso. Ejecuta el laboratorio 23 en http://127.0.0.1:5173/#/laboratorio/23.

## 2. Sigue los datos y las decisiones

La lista y el mensaje se representan desde estado. El botón Agregar conserva una ref para recibir foco tras limpiar. Una ref apunta a un elemento; no sustituye el estado que decide qué recursos deben verse.

La extensión calcula cuántos elementos se eliminarán dentro del handler de limpiar, antes de solicitar la colección vacía. Usa ese número para el anuncio y después dirige foco al botón Agregar, que permanece montado. No intenta enfocar una fila que acaba de desaparecer.

El estado del mensaje y la colección se actualizan en la acción. Un efecto que observe cada variación de la lista no conocería necesariamente si ocurrió un agregado, una limpieza u otra operación futura. Comunicar la intención desde el evento mantiene el significado del aviso.

role=status ofrece una región de anuncio sin convertir cada mensaje en un nuevo destino de foco. La presencia del atributo no certifica la experiencia completa: verifica teclado y lector de pantalla. También comprueba que el texto largo no oculte los botones al aumentar zoom o reducir ancho.

## 3. Contrasta una modificación

Agrega tres veces con teclado y limpia. Espera cantidad eliminada 3, lista vacía y foco en Agregar. Limpia otra vez y espera 0 eliminados. Repetir el caso vacío distingue un cálculo de la cantidad real de un mensaje fijo escrito para la primera demostración.

La [extensión resuelta completa](ejemplo/Solucion.jsx) se ejecuta en http://127.0.0.1:5173/#/solucion/23. Ábrela después de intentar la práctica; la referencia original sigue disponible en el enlace de regreso.

## 4. Resuelve y explica

Completa la [práctica](PRACTICA.md) y contrasta después la [solución razonada](SOLUCIONES.md). Anota la entrada o acción, el resultado que predijiste y el observado; utiliza la diferencia para explicar la decisión del tema.
